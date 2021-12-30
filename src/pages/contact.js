import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const social = data.site.siteMetadata?.social

  return (
    <Layout location={location} title={siteTitle} social={social} isHome={false}>
      <Seo title="Contact" />
      <h1>Contact Tokenomics DAO</h1>
      <p>Request an Article</p>
      <p>Request Tokenomics Consulting</p>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social { 
            twitter
            discord
            medium
            substack
          }
      }
    }
  }
`
