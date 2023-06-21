import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { motion } from "framer-motion"

const MenuSides = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDo4"}) {
            id
            menuSides {
              side1
              side1Desc
              side2
              side2Desc
              side3
              side3Desc
              side4
              side4Desc
              side5
              side5Desc
              side6
              side6Desc
              side7
              side7Desc
              side8
              side8Desc
              side9
              side9Desc
              side10
              side10Desc
              side11
              side11Desc
              side12
              side12Desc
              side13
              side13Desc
            }
          }
        }
        
  
  `)
  
  
  return (


    <motion.div animate={{ x: 50 }}>
      <p className='menu-item-subtitle extra-text entree-edition sides'><strong>à la carte (6)</strong> </p>
      {/* 👇️ iterate object VALUES */}
      {Object.values(data.wpPage.menuSides).map((value, index) => {

        if (index % 2==0) {
            return (
                
                <div key={index} className="menu-item-container">
                 
                  <h2 className='menu-item-title'>{value}</h2>
      
                
                </div>
              );
        }


        return (
          <div key={index} className="menu-item-container">
           
            <p className='menu-item-subtitle'>{value}</p>

        
          </div>
        );
      })}
    </motion.div>
  )
  
}

export default MenuSides