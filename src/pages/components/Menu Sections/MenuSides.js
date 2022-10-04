import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'


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
            }
          }
        }
        
  
  `)
  
  
  return (


    <div>
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
    </div>
  )
  
}

export default MenuSides