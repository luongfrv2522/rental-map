import {io, Socket} from "socket.io-client";

let socket : Socket;

export const getSocket = () => {
  if (!socket) {
    socket = io({
      path: "/ws",
      autoConnect: false, // ta sẽ tự connect'
      transports: ["websocket"],
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 2000,
      timeout: 10000, // 10s
    });
  }
  return socket;
};
