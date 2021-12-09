import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const PostCard = ({ post }) => {
    const url = `/${post.frontmatter.slug}/`
    const image = getImage(post.frontmatter.feature_image)

    return (
        <Link to={url} className="post-card">
            <header className="post-card-header">
                <GatsbyImage className="post-card-image" image={image} alt='' />
                {post.tags && <div className="post-card-tags"> <Tags post={post} visibility="public" autolink={false} /></div>}
                {post.featured && <span>Featured</span>}
                <h2 className="post-card-title">{post.frontmatter.title}</h2>
            </header>
            <section className="post-card-excerpt">{post.frontmatter.excerpt}</section>
            <footer className="post-card-footer">
                <div className="post-card-footer-left">
                    <div className="post-card-avatar">
                    </div>
                </div>
                <div className="post-card-footer-right">
                </div>
            </footer>
        </Link>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        frontmatter: PropTypes.shape({
            slug: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            feature_image: PropTypes.object,
            featured: PropTypes.bool,
            tags: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string,
                })
            ),
            // excerpt: PropTypes.string.isRequired,
            // primary_author: PropTypes.shape({
            //     name: PropTypes.string.isRequired,
            //     profile_image: PropTypes.string,
            // }).isRequired,
        })
    }).isRequired,
}

export default PostCard
