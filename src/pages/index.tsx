import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ToolBox from "../components/ToolBox"
import Form1 from "../components/Form1"

const IndexPage: React.FC<PageProps> = ({ data, path }) => (
  <Layout>
    <SEO title="Home" />
    <ToolBox>
      <Form1 />
    </ToolBox>
  </Layout>
)

export default IndexPage
