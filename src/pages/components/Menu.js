import React, { Component } from 'react'
import MenuAppetizers from './Menu Sections/MenuAppetizers'
import MenuEntrees from './Menu Sections/MenuEntrees'
import MenuSoups from './Menu Sections/MenuSoups';
import MenuSides from './Menu Sections/MenuSides';
import MenuDesserts from './Menu Sections/MenuDesserts';
import { withArtDirection } from 'gatsby-plugin-image';

export default class Test extends Component {
    constructor(props) {
        super(props);

       

        this.state = {
          menuSection: <MenuAppetizers />,
          active1: "active",
          active2: "white",
          active3: "white",
          active4: "white",
          active5: "white",
        };
      }

    
      changeSection = (x, y) => {
        
        this.setState({
            menuSection: x,
            active1: "white",
            active2: "white",
            active3: "white",
            active4: "white",
            active5: "white",
            [y]: "active",
        })
        
    }
    
  render() {
    
   
    return (
        <div className='menu-container' id="menu">
        <h1 className='menu-title'>MENU</h1>
        <div className='menu-selection-container'>
            <button  onClick={() => this.changeSection(<MenuAppetizers />,"active1")} className={'menu-selection-item' + ' ' + this.state.active1}>APPETIZERS</button>
            <button  onClick={() => this.changeSection(<MenuEntrees />,"active2")} className={'menu-selection-item' + ' ' + this.state.active2}>ENTREES</button>
            <button  onClick={() => this.changeSection(<MenuSoups />,"active3")} className={'menu-selection-item' + ' ' + this.state.active3}>SOUPS & SALADS</button>
            <button  onClick={() => this.changeSection(<MenuSides />,"active4")} className={'menu-selection-item' + ' ' + this.state.active4}>SIDES</button>
            <button  onClick={() => this.changeSection(<MenuDesserts />,"active5")} className={'menu-selection-item' + ' ' + this.state.active5}>DESSERTS</button>
        </div>
        <div className='menu-items-container'>
{this.state.menuSection}
        </div>
      </div>
    )
  }
}
