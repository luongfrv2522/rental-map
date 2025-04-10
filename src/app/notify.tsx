import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {Toaster, toaster} from "@/components/ui/toaster";
import {addNotification, NotifyStateItem} from "@/store/notifySlice";
import {getSocket} from "@/lib/socket";

export const Notify = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let socket = getSocket();
    socket.on("notify", (data: NotifyStateItem) => {
      dispatch(addNotification(data));
    });
  }, [dispatch]);

  // Gọi API để khởi động socket server
  useEffect(() => {
    fetch("/api/socket");

    let socket = getSocket();
    if (!socket.connected) {
      socket.connect();
    }
    socket.on("connect", () => {
      console.log("✅ Connected:", socket.id);
      toaster.success({ title: 'Connected'});
    });

    socket.on("disconnect", () => {
      console.log("❌ Disconnected:");
      toaster.error({ title: 'Disconnected'});
    });
  }, []);

  return <Toaster/>
}