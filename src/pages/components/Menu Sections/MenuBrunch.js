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
                brunchItem4
                brunchDesc4
                brunchItem5
                brunchDesc5
                brunchItem6
                brunchDesc6
                brunchItem7
                brunchDesc7
                brunchItem8
                brunchDesc8
                brunchItem9
                brunchDesc9
              
            }
          }
        }
        
        
  
  `)
  
  
  return (

 
    <motion.div animate={{ x: 50 }}>
      <h1 className='sides-container-title soup-title'>Specialties</h1>
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
   
      
      <div className='sides-container'>
        <div className='sides-container-2'>
          <h1 className='sides-container-title soup-title'>Sides</h1>
          <div className='sides-list-container'>

          
          <ul className='sides-list'>
            <li className='sides-item menu-item-subtitle less-margin'>
              Two Eggs 4
            </li>
            <li className='sides-item menu-item-subtitle less-margin'>
              Fresh Fruit 4
            </li>
            <li className='sides-item menu-item-subtitle less-margin'>
              Two Sausage Patties 3
            </li>
            <li className='sides-item menu-item-subtitle less-margin'>
              Two Slices of Hickory Bacon 3
            </li>
           
          </ul>
          <ul className='sides-list'>
          <li className='sides-item menu-item-subtitle less-margin'>
              Home Fries 3
            </li>
            <li className='sides-item menu-item-subtitle less-margin'>
              One Biscuit 2
            </li>
            <li className='sides-item menu-item-subtitle less-margin'>
              Two Slices of Toast 2
            </li>
            <li className='sides-item menu-item-subtitle less-margin'>
              One Waffle 3
            </li>
          </ul>
          </div>
        </div>

        <div className='sides-container-2'>
          <h1 className='sides-container-title soup-title'>Omelette Add-Ons</h1>
          <div className='sides-list-container'>
          <ul className='sides-list'>
            <li className='sides-item menu-item-subtitle less-margin menu-item-subtitle'>
              Two Eggs 4
            </li>
            <li className='sides-item menu-item-subtitle less-margin'>
              Fresh Fruit 4
            </li>
            <li className='sides-item menu-item-subtitle less-margin'>
              Two Sausage Patties 3
            </li>
            <li className='sides-item menu-item-subtitle less-margin'>
              Two Slices of Hickory Bacon 3
            </li>
            
          </ul>
          <ul className='sides-list'>
          <li className='sides-item menu-item-subtitle less-margin'>
              Home Fries 3
            </li>
            <li className='sides-item menu-item-subtitle less-margin'>
              One Biscuit 2
            </li>
            <li className='sides-item menu-item-subtitle less-margin'>
              Two Slices of Toast 2
            </li>
            <li className='sides-item menu-item-subtitle less-margin'>
              One Waffle 3
            </li>
          </ul>
          </div>
        </div>
       
       
      </div>
      <h1 className='available-brunch menu-item-title'>Available Sundays 11am-3pm</h1>
      
    </motion.div>
  )
  
}

export default MenuBrunch