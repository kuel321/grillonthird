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
          entreeItem10
          entreeItem10Desc
          entreeItem11
          entreeItem11Desc
          entreeItem12
          entreeItem12Desc
          entreeItem13
          entreeItem13Desc
          entreeItem14
          entreeItem14Desc
          entreeItem15
          entreeItem15Desc
          entreeItem16
          entreeItem16Desc
          entreeItem17
          entreeItem17Desc
          entreeItem18
          entreeItem18Desc
          entreeItem19
          entreeItem19Desc
          entreeItem20
          entreeItem20Desc
          
        }
        menuSteakToppers {
          steakTopper1
          steakTopper2
          steakTopper3
          steakTopper4
          steakTopper5
          steakTopper6
          steakTopper7
          steakTopper8
        }
      }
    }
  
  `)
  
  
  return (


    <motion.div animate={{ x: 50 }}>
      {/* 👇️ iterate object VALUES */}
      <p className='menu-item-title'><strong>Early Bird Special Daily starting at 4pm to 6pm</strong> 
      <br>
</br>
<strong className='menu-item-title'>This will be every day we are open Wed. to Sun.</strong>
<br></br>

<p className='menu-item-subtitle'>2 select entrees at a discounted price plus a free dessert.<br></br>Chicken Parmesan (20)<br></br>Crispy Fried Chicken (20) <br></br>Beef Tips (24) <br></br>Shrimp Alfredo (22)</p>

</p>
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