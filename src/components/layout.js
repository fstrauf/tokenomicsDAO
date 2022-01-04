import React from "react"
import { Link } from "gatsby"
import Logo from '../images/Logo'
import Search from "./search"
// Styles
import '../styles/app.css'


const searchIndices = [{ name: `Pages`, title: `Pages` }]
const Layout = ({ location, title, children, social, isHome}) => {
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
                  <Link
                    to={`/`}
                  >
                    <svg className="site-logo"
                      data-name="rv_svg_1"
                      viewBox="0 0 553.71 489.95"
                      id="rv_svg_1">
                      <Logo />
                    </svg>
                  </Link>
                </div>
                <div className="site-mast-right">
                  {social.twitter && <a href={social.twitter} className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}
                  {social.discord && <a href={social.discord} className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/discord.svg" alt="Discord" /></a>}
                  {social.medium && <a href={social.medium} className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/medium.svg" alt="Medium" /></a>}
                  {social.substack && <a href={social.substack} className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/substack.svg" alt="Substack" /></a>}
                </div>
              </div>
              {isHome ?
                <div className="site-banner">
                  <h1 className="site-banner-title">Welcome to Tokenomics DAO</h1>
                  <p className="site-banner-desc">A place to explore and collaborate on tokenomics of web3 protocols and blockchain applications</p>
                </div> :
                null}
              <nav className="site-nav">
                <div className="site-nav-left">
                  <Search indices={searchIndices} />
                </div>
                <div className="site-nav-right">
                  <Link className="site-nav-button" to="/contact">Contact</Link>
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
                <Link to="/">{title}</Link> © 2021
              </div>
              <div className="site-foot-nav-right">
                {social.twitter && <a href={social.twitter} className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}
                {social.discord && <a href={social.discord} className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/discord.svg" alt="Discord" /></a>}
                {social.medium && <a href={social.medium} className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/medium.svg" alt="Medium" /></a>}
                {social.substack && <a href={social.substack} className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/substack.svg" alt="Substack" /></a>}
              </div>
            </div>
          </footer>

        </div>
      </div>
    </>
  )
}

export default Layout
