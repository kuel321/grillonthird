import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { motion } from "framer-motion"


const MenuAppetizers = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      wpPage(id: {eq: "cG9zdDo4"}) {
        menuApp {
          item1
          item1Desc
          item2
          item2Desc
          item3
          item3Desc1
          item4
          item4Desc
          item5
          item5Desc
          item6
          item6Desc
          item7
          item7Desc
          item8
          item8Desc
          item9
          item9Desc
          item10
          item10Desc
        }
      }
    }
  `)
  
  
  return (


    <motion.div animate={{ x: 50 }}>
      {/* 👇️ iterate object VALUES */}
      {Object.values(data.wpPage.menuApp).map((value, index) => {

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

export default MenuAppetizers