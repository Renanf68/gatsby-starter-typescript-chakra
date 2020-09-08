import React from "react"
import { Link } from "gatsby"
import { Flex, Heading } from "@chakra-ui/core"
import Container from "./Container"

interface PageProps {
  siteTitle?: string
}

const Header: React.FC<PageProps> = ({ siteTitle }) => (
  console.log(siteTitle),
  (
    <Flex
      as="header"
      justify="center"
      align="center"
      bg="primary"
      padding="3.2rem 0"
    >
      <Container tag="div" direction="column">
        <Heading as="h1" size="lg" color="gray.50">
          <Link to="/">{siteTitle}</Link>
        </Heading>
      </Container>
    </Flex>
  )
)

export default Header
