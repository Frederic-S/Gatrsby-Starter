import React from "react"
import headerStyles from "./header.module.scss"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className="{headerStyles.overlay}"></div>
      <div className={headerStyles.heroContent}>
        <p className={headerStyles.brand}>
          <Link to="/">Gatsby Starter</Link>
        </p>
        <p className={headerStyles.description}>Web Developer</p>
      </div>
      <nav className={headerStyles.navContainer}>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
