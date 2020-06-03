import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Menu from "./Menu"
import "../scss/main.scss"

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header appTitle={data.site.siteMetadata.title} showMenu={showMenu} setShowMenu={setShowMenu} />
      <Menu showMenu={showMenu} />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
