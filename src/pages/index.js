import * as React from "react"

import Seo from "../components/seo"
import Amenities from "../components/Amenities/Amenities"
import Layout from "../components/Layout/Layout"
import LetHelp from '../components/LetHelp/LetHelp';

const IndexPage = () => (
  <Layout>
    <LetHelp />
    <Amenities />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
