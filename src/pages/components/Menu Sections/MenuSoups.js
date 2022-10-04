import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'


const MenuSoups = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDo4"}) {
            id
            menuSoups {
              soupItem1
              soupItem2
            }
            menuSalads {
                saladItem1
                saladItem1Desc
                saladItem2
                saladItem2Desc
                saladItem3
                saladItem4
                saladItem3Desc
                saladItem4Desc
            }
          }
        }
        
  
  `)
  
  
  return (


    <div>
        <h1 className='soup-title'>SOUPS</h1>
      {/* 👇️ iterate object VALUES */}
      {Object.values(data.wpPage.menuSoups).map((value, index) => {

   


        return (
          <div key={index} className="menu-item-container">
           
           <h2 className='menu-item-title'>{value}</h2>

        
          </div>
        );
      })}
      <h1 className='soup-title'>SALADS</h1>
      {Object.values(data.wpPage.menuSalads).map((value, index) => {
console.log(value);
if(value == "blank") {
    return (
        <div key="index" className='menu-item-container'>
            <h2 className='menu-item-title'></h2>
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
    </div>
  )
  
}

export default MenuSoups