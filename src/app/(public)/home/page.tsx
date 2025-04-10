"use client";
import {Button, For, HStack} from "@chakra-ui/react";
import React from "react";
import {toaster} from "@/components/ui/toaster";

export default function Home() {
  
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
      
    </>
  );
}
