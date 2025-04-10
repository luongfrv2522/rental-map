import {Server as IOServer} from "socket.io";
import type {NextApiRequest, NextApiResponse} from "next";
import type {Server as HTTPServer} from "http";
import type {Socket as NetSocket} from "net";

interface NextApiResponseWithSocket extends NextApiResponse {
  socket: NetSocket & {
    server: HTTPServer & {
      io?: IOServer;
    };
  };
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponseWithSocket
) {
  if (!res.socket.server.io) {
    const io = new IOServer(res.socket.server, {
      path: "/ws",
      pingInterval: 10000,   // mỗi 10s gửi ping
      pingTimeout: 5000,     // nếu không nhận pong sau 5s thì xem như mất kết nối
    });

    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("✅ Client connected:", socket.id);

      socket.on("sendNotification", (data) => {
        io.emit("notify", data); // Gửi tới tất cả client
      });

      socket.on("disconnect", () => {
        console.log("❌ Client disconnected:", socket.id);
      });
    });
    console.log("🟢 Socket.IO server initialized");
  }

  res.end();
}