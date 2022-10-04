import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Nav from './components/Nav';
import Menu from './components/Menu';
import MapSection from './components/MapSection';


const Layout = ({ pageTitle, children }) => {

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
  return (
    <div className="home">
      <div className='nav-and-hero'>
        <Nav />
        <img className='hero-image' src={data.wpPage.gatsby.heroImage.mediaItemUrl} ></img>
        <div className='hero-title-container'>
          <p className='hero-title-top'>Welcome to!</p>
          <h1 className='hero-title'>{data.wpPage.gatsby.heroTitle}</h1>
          <p className='hero-title-bottom'>{data.wpPage.gatsby.heroTitleBottom}</p>
        </div>
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