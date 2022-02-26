import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const social = data.site.siteMetadata?.social

  return (
    <Layout location={location} title={siteTitle} social={social} isHome={false}>
      <Seo title="Contact" />
      <section class='content-body load-external-scripts'>
        <Link className="contact-form" to='https://forms.gle/h5hQeTvysB5xpC1K8'>Consulting Requests</Link>
        <Link className="contact-form" to='https://forms.gle/Y5BWFa5CtRGNEoAbA'>Article Requests</Link>
      </section>
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
            docs
            youtube
          }
      }
    }
  }
`
