import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { motion } from "framer-motion"

const MenuEntrees = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      wpPage(id: {eq: "cG9zdDo4"}) {
        menuEntrees {
          entreeItem1
          entreeItem1Desc
          entreeItem2
          entreeItem2Desc
          entreeItem3
          item3Desc
          entreeItem4
          entreeItem4Desc
          entreeItem5
          entreeItem5Desc
          entreeItem6
          entreeItem6Desc
          entreeItem7
          entreeItem7Desc
          entreeItem8
          entreeItem8Desc
          entreeItem9
          entreeItem9Desc
          
        }
        menuSteakToppers {
          steakTopper1
          steakTopper2
          steakTopper3
          steakTopper4
          steakTopper5
          steakTopper6
        }
      }
    }
  
  `)
  
  
  return (


    <motion.div animate={{ x: 50 }}>
      {/* 👇️ iterate object VALUES */}
      {Object.values(data.wpPage.menuEntrees).map((value, index) => {

        if (index % 2==0) {
            return (
                
                <div key={index} className="menu-item-container">
                 
                  <h2 className='menu-item-title'>{value}</h2>
      
                
                </div>
              );
        }

        if(value == "blank") {
          return (
              <div  className='menu-item-container'>
                  <h2 style={{marginBottom: "3.5rem"}} className='menu-item-title'></h2>
                  </div>
          )
      }
        return (
          <div key={index} className="menu-item-container">
           
            <p className='menu-item-subtitle'>{value}</p>

        
          </div>
        );
      })}

      <h1 className='soup-title'>STEAK TOPPERS</h1>
      {Object.values(data.wpPage.menuSteakToppers).map((value, index) => {



return (
  <div key={index} className="menu-item-container">
   
   <h2 className='menu-item-title extra-bottom'>{value}</h2>


  </div>
);
})}
    </motion.div>
  )
  
}

export default MenuEntrees