import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Manifesto = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const social = data.site.siteMetadata?.social

  return (
    <Layout location={location} title={siteTitle} social={social} isHome={false}>
      <Seo title="Contact" />
      <div className="manifesto">
        <p>
          <h1>We are not credentialists.</h1>
          We believe that web3 is open to everyone who is interested, wants to create value and believes that the best ideas will win.
          To become a part of our community, all you need is to show up and contribute - no degree, CV or experience necessary. We run on curiosity.
        </p>
        <p>
          <h1>We make Tokenomics Relevant. For Everyone.</h1>
          We actively support mass market adoption of web3 and crypto.
          We do this by creating content that is easy to understand. Crucial information about projects is often buried deep inside scientific papers, we work to uncover this treasure, simplify and share it.
        </p>
        <p>
          <h1>We reduce uncertainty for web3 investors and builders.</h1>
          We strive to answer the key question of tokenomics: why do some tokens/projects/communities work and others fail? We are building an ever-expanding tokenomics framework to help reduce risk and increase transparency.
        </p>
        <p>
          <h1>We explore anything web3.</h1>
          We believe that web3 is a freedom movement. We will not be tied to any specific project, technology or token. We go wherever our curiosity takes us and create value when we get there.
        </p>
        <p>
          <h1>We share our knowledge with the community.</h1>
          We believe in the power of the hive-mind and prefer to source all talent and know-how from our community. It is our goal to set up a token-structure that allows the community to own a piece of the Tokenomics DAO.
        </p>
      </div>
    </Layout>
  )
}

export default Manifesto

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
            docs
            youtube
          }
      }
    }
  }
`
