import React from "react";
import {Box, Flex} from "@chakra-ui/react";

type HeaderProps = {
  logo: React.ReactNode,
  actions: React.ReactNode,
}
export default function Header(props: HeaderProps)  {
  return (
    <header>
      <Flex justify="space-between" align="center">
        <Box>
          {props.logo}
        </Box>
        <Flex >
          {props.actions}
        </Flex>
      </Flex>
    </header>
  )
}