"use client";
import {Provider as ReduxProvider, useSelector} from "react-redux";
import store, {RootState} from "@/store/store";
import {ReactNode} from "react";
import {Box, Center, Show} from "@chakra-ui/react";
import Loading from "@/components/loading";
import {Toaster} from "@/components/ui/toaster"

export default function PageProvider({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider store={store}>
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