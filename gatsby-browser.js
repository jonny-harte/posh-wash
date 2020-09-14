/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "typeface-montserrat"
import "typeface-orbitron"

import React from "react"

import Layout from "./src/components/layout"

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ element, props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>
}
