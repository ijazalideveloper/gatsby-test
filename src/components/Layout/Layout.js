/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import "./layout.css"
import Header from "../Header/index"
import Sidebar from "../Sidebar/index"
import { UseHeaderHook } from "../../hooks/headerCustomHook"
import Footer from "../Footer/index"

const Layout = ({ children }) => {
  const { openSheet, onClickHideShowSheet } = UseHeaderHook()

  return (
    <div className="mainWrapper flex flex-column">
      <div className="leftSection">
        <Sidebar
          openSheet={openSheet}
          onClickHideShowSheet={onClickHideShowSheet}
        />
      </div>
      <div className="rightSection">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
