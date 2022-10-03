import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'


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
            item3Desc
            item4
            item4Desc
            item5
            item5Desc
            item6
            item6Desc
            item7
            item7Desc
          }
        }
    }
  `)
  
  
  return (


    <div>
      {/* 👇️ iterate object VALUES */}
      {Object.values(data.wpPage.menuApp).map((value, index) => {

        if (index % 2==0) {
            return (
                <div key={index} className="menu-item-container">
                 
                  <h2>{value}</h2>
      
                
                </div>
              );
        }


        return (
          <div key={index} className="menu-item-container">
           
            <p>{value}</p>

        
          </div>
        );
      })}
    </div>
  )
  
}

export default MenuAppetizers