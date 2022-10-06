import React, { useEffect, useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Nav from './components/Nav';
import Menu from './components/Menu';
import MapSection from './components/MapSection';
import { motion } from "framer-motion"

import MenuBack from './components/Menu Sections/menuback.png'

const Layout = ({ pageTitle, children }) => {

  const [movetoview, Setmovetoview] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      wpPage(id: {eq: "cG9zdDo4"}) {
        id
        title
        uri
        gatsby {
          fieldGroupName
          heroTitle
          
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
   
  }
    
    useEffect(() => {
        setTimeout(scrollMenu, 2000);
    })
 
  return (
    <div className="home" id="home1">
      <div className='nav-and-hero'>
        <Nav />
        <img className='hero-image' src={data.wpPage.gatsby.heroImage.mediaItemUrl} ></img>
        <motion.div initial={{ opacity: 0, y: -299 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }} transition={{duration: 1.5}} className='hero-title-container'>
          <p className='hero-title-top'>Welcome to</p>
          <h1 className='hero-title'>{data.wpPage.gatsby.heroTitle}</h1>
          <p className='hero-title-bottom'>{data.wpPage.gatsby.heroTitleBottom}</p>
        </motion.div>
      </div>
      <div className='menu-section-container'>
        <Menu />
      </div>
      <div className='map-and-contact-container'>
        <MapSection />
      </div>


    </div>
  )

}

export default Layout