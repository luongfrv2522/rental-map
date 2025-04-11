"use client";
import {useDispatch} from "react-redux";
import {useEffect, useRef} from "react";
import {Toaster, toaster} from "@/components/ui/toaster";
import {addNotification, NotifyStateItem} from "@/store/notify-slice";
import {getSocket} from "@/lib/socket";

export const Notify = () => {
  const hasDisconnected = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = getSocket();
    socket.on("notify", (data: NotifyStateItem) => {
      dispatch(addNotification(data));
    });
  }, [dispatch]);

  // Gọi API để khởi động socket server
  useEffect(() => {
    fetch("/api/socket");

    const socket = getSocket();
    if (!socket.connected) {
      socket.connect();
    }
    socket.on("connect", () => {
      console.log("✅ Connected:", socket.id);
      if (hasDisconnected.current) {
        toaster.success({ title: "Reconnected" });
      }
    });

    socket.on("disconnect", () => {
      console.log("❌ Disconnected:");
      toaster.error({ title: 'Disconnected'});
      hasDisconnected.current = true;
    });
  }, []);

  return <Toaster/>
}