import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'


const Nav = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      wpPage(id: {eq: "cG9zdDo4"}) {
        id
        title
        uri
        gatsby {
          fieldGroupName
          logoImage {
            id
            mediaItemUrl
          }
          heroImage {
            id
            mediaItemUrl
          }
        }
      }
    }
  `)
  return (
    <div className="navbar-container">
  
        <div className='logo-container'>
            <img src={data.wpPage.gatsby.logoImage.mediaItemUrl} className="logo-image"></img>
        </div>
        <div className='nav-links'>
            <a className='nav-link'>HOME</a>
            <a className='nav-link'>MENU</a>
            <a className='nav-link'>LOCATION & HOURS</a>
            <a className='nav-link order'>PLACE ORDER</a>
        </div>
      
      
    </div>
  )
  
}

export default Nav