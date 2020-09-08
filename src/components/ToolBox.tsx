import React from "react"
import { Flex } from "@chakra-ui/core"

interface PageProps {
  children?: any
}

const ToolBox: React.FC<PageProps> = ({ children }) => {
  return (
    <Flex
      as="div"
      w="100%"
      direction="column"
      bg="white"
      py={8}
      px={8}
      mt="-1rem"
      borderRadius="md"
      boxShadow="md"
    >
      {children}
    </Flex>
  )
}

export default ToolBox
