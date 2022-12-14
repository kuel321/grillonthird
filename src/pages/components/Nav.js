import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { motion } from "framer-motion"

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

  const scrollMenu = () => {
    const section = document.querySelector('#menu');
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    console.log("clicked");
  }
  const scrollLocation = () => {
    const section = document.querySelector('#location');
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    console.log("clicked");
  }
  const scrollHome = () => {
    const section = document.querySelector('#home1');
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    console.log("clicked");
  }
  return (
    <div className="navbar-container">
  
        <div className='logo-container'>
            <img src={data.wpPage.gatsby.logoImage.mediaItemUrl} className="logo-image"></img>
        </div>
        <div className='nav-links'>
            <a  onClick={scrollHome} className='nav-link'>HOME</a>
            <a onClick={scrollMenu} className='nav-link'>MENU</a>
            <a onClick={scrollLocation} className='nav-link'>LOCATION & HOURS</a>
            <motion.a initial={{backgroundColor: "#F27048", color:"white" }} style={{color: "white"}} transition="0.3" whileHover={{backgroundColor: "white", color: "#F27048"}}  className='nav-link order'>PLACE ORDER</motion.a>
        </div>
      
      
    </div>
  )
  
}

export default Nav