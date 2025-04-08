"use client";
import {Provider as ReduxProvider, useSelector} from "react-redux";
import store, {RootState} from "@/store/store";
import {ReactNode, useEffect} from "react";
import {Box, Center, Show} from "@chakra-ui/react";
import Loading from "@/components/loading";
import {Toaster} from "@/components/ui/toaster"
import {useSocket} from "@/hooks/useSocket";

export default function PageProvider({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <AppContent/>
      <Toast/>
      <PageLoading>{children}</PageLoading>
    </ReduxProvider>
  );
}

export function PageLoading({children}: { children: ReactNode }) {
  const loading = useSelector((state: RootState) => state.pageLoading.isLoading);
  return (
    <>
      {children}
      <Show when={loading}>
        <Box pos="absolute" inset="0" bg="bg/80">
          <Center h="full">
            <Loading/>
          </Center>
        </Box>
      </Show>
    </>
  );
}

export const Toast = () => {
  return <Toaster/>
}

function AppContent() {
  useSocket();

  // Gọi API để khởi động socket server
  useEffect(() => {
    fetch("/api/socket");
  }, []);

  return null;
}