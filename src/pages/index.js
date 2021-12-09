import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from '../components/PostCard'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Tokenomics DAO" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
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
        {/* {posts.map(post => {
          // const title = post.frontmatter.title || post.fields.slug
          // <PostCard key={post.id} post={post} />
          // return (
          //   <li key={post.fields.slug}>
          //     <article
          //       className="post-list-item"
          //       itemScope
          //       itemType="http://schema.org/Article"
          //     >
          //       <header>
          //         <h2>
          //           <Link to={post.fields.slug} itemProp="url">
          //             <span itemProp="headline">{title}</span>
          //           </Link>
          //         </h2>
          //         <small>{post.frontmatter.date}</small>
          //       </header>
          //       <section>
          //         <p
          //           dangerouslySetInnerHTML={{
          //             __html: post.frontmatter.description || post.excerpt,
          //           }}
          //           itemProp="description"
          //         />
          //       </section>
          //     </article>
          //   </li>
          // )
        // })}
      </ol> */}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
