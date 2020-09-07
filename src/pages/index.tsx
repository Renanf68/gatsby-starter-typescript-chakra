import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/Header"
import SEO from "../components/Seo"

const IndexPage: React.FC<PageProps> = ({ data, path }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Gatsby supports TypeScript by default!</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default IndexPage
