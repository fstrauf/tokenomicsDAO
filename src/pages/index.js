import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from '../components/PostCard'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const social = data.site.siteMetadata?.social
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle} social={social} isHome={true}>
        <Seo title="Tokenomics DAO" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle} social={social} isHome={true}>
      <Seo title="Tokenomics DAO" />
      {/* <ol style={{ listStyle: `none` }}> */}
      <div className="container">
                    <section className="post-feed">
                        {posts.map(post => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <PostCard  post={post} />
                            // key={node.id}
                        ))}
                    </section>
                    {/* <Pagination pageContext={pageContext} /> */}
        </div>
    </Layout>
  )
}

export default BlogIndex

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
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
          description
          slug
          id
          excerpt
          feature_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
