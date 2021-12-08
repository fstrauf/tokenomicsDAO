import * as React from "react"
import { Link } from "gatsby"
// import styled from 'styled-components'

// Styles
import '../styles/app.css'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <>
      <div className="viewport">
        <div className="viewport-top">
          {/* The main header section on top of the screen */}
          <header className="site-head">
            <div className="container">
              <div className="site-mast">
                <div className="site-mast-left">
                  <Link to="/">
                    {/* {site.logo ?
                      <img className="site-logo" src={site.logo} alt={site.title} />
                      : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                    } */}
                  </Link>
                </div>
                <div className="site-mast-right">
                  {/* {site.twitter && <a href={twitterUrl} className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}
                  {site.facebook && <a href={facebookUrl} className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/facebook.svg" alt="Facebook" /></a>} */}
                  <a className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" /></a>
                </div>
              </div>
              {/* {isHome ? */}
                <div className="site-banner">
                  <h1 className="site-banner-title">test title</h1>
                  <p className="site-banner-desc">test description</p>
                </div>
                {/* : null} */}
              <nav className="site-nav">
                <div className="site-nav-left">
                  {/* The navigation items as setup in Ghost */}
                  {/* <Navigation data={site.navigation} navClass="site-nav-item" /> */}
                </div>
                <div className="site-nav-right">
                  {/* <Link className="site-nav-button" to="/about">About</Link> */}
                </div>
              </nav>
            </div>
          </header>

          <main className="site-main">
            {/* All the main content gets inserted here, index.js, post.js */}
            {children}
          </main>

        </div>

        <div className="viewport-bottom">
          {/* The footer at the very bottom of the screen */}
          <footer className="site-foot">
            <div className="site-foot-nav container">
              <div className="site-foot-nav-left">
                {/* <Link to="/">{site.title}</Link> © 2021 &mdash; Published with <a className="site-foot-nav-item" href="https://ghost.org" target="_blank" rel="noopener noreferrer">Ghost</a> */}
              </div>
              <div className="site-foot-nav-right">
                {/* <Navigation data={site.navigation} navClass="site-foot-nav-item" /> */}
              </div>
            </div>
          </footer>

        </div>
      </div>




      {/* <div className="global-wrapper" data-is-root-path={isRootPath}>
        <sHeader className="global-header">{header}</sHeader>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div> */}
    </>
  )
}

export default Layout
