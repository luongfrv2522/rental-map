import {io} from "socket.io-client";

const socket = io({
  path: "/ws",
  autoConnect: false, // ta sẽ tự connect'
  transports: ["websocket"],
});

export default socket;