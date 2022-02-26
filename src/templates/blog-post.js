import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const social = data.site.siteMetadata?.social

  return (
    <>
    <Helmet>
    
    </Helmet>
    <Layout location={location} title={siteTitle} social={social} isHome={false}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="post-full-content"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 class='content-title' itemProp="headline">{post.frontmatter.title}</h1>
        </header>
        <section class='content-body load-external-scripts'
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
        </footer>
      </article>
    </Layout>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
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
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
