import React from "react"
import { Flex } from "@chakra-ui/core"

interface PageProps {
  children?: any
  tag: any
  direction: any
}

const Container: React.FC<PageProps> = ({ children, tag, direction }) => {
  return (
    <Flex w="90%" maxW="840px" margin="0 auto" direction={direction} as={tag}>
      {children}
    </Flex>
  )
}

export default Container
