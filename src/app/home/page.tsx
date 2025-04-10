"use client";
import {Box, Button, For, HStack, Text, VStack} from "@chakra-ui/react";
import React from "react";
import {toaster} from "@/components/ui/toaster";
import {RootState} from "@/store/store";
import {useSelector} from "react-redux";

export default function Home() {
  const notifies = useSelector((state: RootState) => state.notify.list);
  
  return (
    <>
      <HStack minH="100vh">
        <For each={["success", "error", "warning", "info"]}>
          {(type) => (
            <Button
              size="sm"
              variant="outline"
              key={type}
              onClick={() =>
                toaster.create({
                  title: `Toast status is ${type}`,
                  type: type,
                })
              }
            >
              {type}
            </Button>
          )}
        </For>
      </HStack>

      <VStack>
        {notifies.map((n, i) => (
          <Box key={i} borderWidth="1px" p={3} rounded="md">
            <Text fontWeight="bold">{n.title}</Text>
            <Text>{n.content}</Text>
          </Box>
        ))}
      </VStack>
    </>
  );
}
