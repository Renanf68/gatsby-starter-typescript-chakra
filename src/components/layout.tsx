import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "@chakra-ui/core"

import Header from "./Header"
import customTheme from "../styles/theme"
import Main from "./Main"
import Footer from "./Footer"

import "../styles/global.css"

interface PageProps {
  children?: any
}

const Layout: React.FC<PageProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <ThemeProvider theme={customTheme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
