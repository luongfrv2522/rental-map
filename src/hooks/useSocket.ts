import {useEffect} from "react";
import socket from "@/lib/socket";
import {useDispatch} from "react-redux";
import {addNotification} from "@/store/notifySlice";

export const useSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("✅ Connected:", socket.id);
      console.log("⚙️ Transport:", socket.io.engine.transport.name);
    });

    socket.on("notify", (data) => {
      dispatch(addNotification(data));
    });

    return () => {
      socket.off("connect");
      socket.off("notify");
      socket.disconnect();
    };
  }, [dispatch]);
};
