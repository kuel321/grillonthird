import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'


const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="blank">
      <header>{data.site.siteMetadata.title}</header>
      
    </div>
  )
  
}

export default Layout