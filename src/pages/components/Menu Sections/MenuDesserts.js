import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { motion } from "framer-motion"

const MenuDesserts = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDo4"}) {
            id
            menuDesserts {
              dessert1
              dessert1Desc
             
              dessert2
              dessert2Desc
              dessert3
              dessert3Desc
              dessert4
              dessert4Desc
            }
          }
        }
        
        
  
  `)
  
  
  return (


    <motion.div animate={{ x: 50 }}>
      {/* 👇️ iterate object VALUES */}
      {Object.values(data.wpPage.menuDesserts).map((value, index) => {
        if(value == "blank") {
            return (
                <div key="index" className='menu-item-container'>
                    <h2 style={{marginBottom: "3.5rem"}} className='menu-item-title'></h2>
                    </div>
            )
        }

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

export default MenuDesserts