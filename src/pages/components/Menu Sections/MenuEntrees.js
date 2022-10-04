import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'


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
          item3Desc
        }
      }
    }
  
  `)
  
  
  return (


    <div>
      {/* 👇️ iterate object VALUES */}
      {Object.values(data.wpPage.menuEntrees).map((value, index) => {

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
    </div>
  )
  
}

export default MenuEntrees