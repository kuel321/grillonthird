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

  const comingSoonAlert = () => {
    alert("Coming soon!");
    console.log("test");
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
            <motion.a  onClick={comingSoonAlert} initial={{backgroundColor: "#F27048", color:"white" }} style={{color: "white"}} transition="0.3" whileHover={{backgroundColor: "white", color: "#F27048"}}  className='nav-link order'>PLACE ORDER</motion.a>
        <div className='social-icons'>
          <a href='https://www.facebook.com/thegrillonthird' target="_BLANK">
          <img className='social-icon-f' src="https://thegrill.bulldog.rocks/admin/wp-content/uploads/2022/12/107175_circle_facebook_icon.png">

          </img>

          </a>
          <a href='https://www.instagram.com/thegrillonthird/?hl=en' target="_BLANK">
          <img className='social-icon-i' src='https://thegrill.bulldog.rocks/admin/wp-content/uploads/2022/12/1298747_instagram_brand_logo_social-media_icon.png'></img>
          </a>
        </div>
        </div>
      
      
    </div>
  )
  
}

export default Nav