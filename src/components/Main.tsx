import React from "react"
import { Flex } from "@chakra-ui/core"
import Container from "./Container"

interface PageProps {
  children?: any
}

const Main: React.FC<PageProps> = ({ children }) => {
  return (
    <Flex
      w="100%"
      minH="100vh"
      justify="center"
      align="flex-start"
      bg="secondary"
      as="main"
    >
      <Container tag="div" direction="column">
        {children}
      </Container>
    </Flex>
  )
}

export default Main
