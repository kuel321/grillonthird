import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { motion } from "framer-motion"

const MenuBrunch = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDo4"}) {
           
            menuBrunch {
                brunchItem1test
                brunchDesc1
                brunchItem2
                brunchDesc2
                brunchItem3
                brunchDesc3
              
            }
          }
        }
        
        
  
  `)
  
  
  return (


    <motion.div animate={{ x: 50 }}>
      {/* 👇️ iterate object VALUES */}
      {Object.values(data.wpPage.menuBrunch).map((value, index) => {
        if(value == "blank") {
            return (
                <div key="index" className='menu-item-container'>
                    <h2 style={{marginBottom: "3.5rem"}} className='menu-item-title'>Heyoo this is brunch</h2>
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

export default MenuBrunch