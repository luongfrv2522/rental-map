import type {Server as HTTPServer} from "http";
import type {Socket as NetSocket} from "net";
import type {Server as IOServer} from "socket.io";
import type {NextApiResponse} from "next";

interface SocketWithIO extends NetSocket {
  server: HTTPServer & {
    io?: IOServer;
  };
}

export interface NextApiResponseServerIO extends NextApiResponse {
  socket: SocketWithIO;
}