import React from "react"
import { Flex, Link } from "@chakra-ui/core"
import Container from "./Container"

const Footer: React.FC = () => {
  return (
    <Flex
      as="footer"
      position="absolute"
      bottom="0"
      w="100%"
      justify="center"
      align="center"
      padding="0.4rem 0"
      bg="secondary"
    >
      <Container tag="div" direction="row">
        © {new Date().getFullYear()}, Desenvolvido por{" "}
        <Link
          href="https://twitter.com/renan_costa_m"
          marginLeft="0.4rem"
          _hover={{ color: "purple.500" }}
          _focus={{ outline: "none" }}
          isExternal
        >
          <strong>rcdev</strong>
        </Link>
      </Container>
    </Flex>
  )
}

export default Footer
