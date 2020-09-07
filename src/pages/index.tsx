import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage: React.FC<PageProps> = ({ data, path }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Gatsby supports TypeScript by default!</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptatem
      doloremque, iste necessitatibus officia tempore magni nam provident,
      repellendus facilis nesciunt nostrum blanditiis, nisi ipsam! Cumque
      commodi consequatur ullam cum.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default IndexPage
