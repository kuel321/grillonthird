import React, { Component } from 'react'
import MenuAppetizers from './Menu Sections/MenuAppetizers'
import MenuEntrees from './Menu Sections/MenuEntrees'

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
          menuSection: null,
        };
      }

    
      changeSection = (x) => {
        this.setState({
            menuSection: x,
        })
        console.log("click");
        console.log(this.state.menuSection);
    }
    
  render() {
    
   
    return (
        <div className='menu-container'>
        <h1 className='menu-title'>MENU</h1>
        <div className='menu-selection-container'>
            <button onClick={() => this.changeSection(<MenuAppetizers />)} className='menu-selection-item'>APPETIZERS</button>
            
            <button onClick={() => this.changeSection(<MenuEntrees />)} className='menu-selection-item'>ENTREES</button>
            <button className='menu-selection-item'>SOUPS & SALADS</button>
            <button className='menu-selection-item'>SIDES</button>
            <button className='menu-selection-item'>DESSERTS</button>
        </div>
        <div className='menu-items-container'>
{this.state.menuSection}
        </div>
      </div>
    )
  }
}
