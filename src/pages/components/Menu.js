import React, { Component } from 'react'
import MenuAppetizers from './Menu Sections/MenuAppetizers'
import MenuEntrees from './Menu Sections/MenuEntrees'
import MenuSoups from './Menu Sections/MenuSoups';
import MenuSides from './Menu Sections/MenuSides';
import MenuDesserts from './Menu Sections/MenuDesserts';
import { withArtDirection } from 'gatsby-plugin-image';

import { motion } from "framer-motion"

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
      count: 2,
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
      const sections = ({
        1: <MenuAppetizers />,
        2: <MenuEntrees />,
        3: <MenuSoups />,
        4: <MenuSides />,
        5: <MenuDesserts />
      })

    return (
      <div className='menu-container'>
        <div className='menu-anchor' id="menu"></div>
        <h1 className='menu-title'>MENU</h1>
        <div className='menu-selection-container'>
          <motion.button whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }} onClick={() => this.changeSection(<MenuAppetizers />, "active1")} className={'menu-selection-item' + ' ' + this.state.active1}>APPETIZERS</motion.button>
          <motion.button whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }} onClick={() => this.changeSection(<MenuEntrees />, "active2")} className={'menu-selection-item' + ' ' + this.state.active2}>ENTREES</motion.button>
          <motion.button whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }} onClick={() => this.changeSection(<MenuSoups />, "active3")} className={'menu-selection-item' + ' ' + this.state.active3}>SOUPS & SALADS</motion.button>
          <motion.button whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }} onClick={() => this.changeSection(<MenuSides />, "active4")} className={'menu-selection-item' + ' ' + this.state.active4}>SIDES</motion.button>
          <motion.button whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }} onClick={() => this.changeSection(<MenuDesserts />, "active5")} className={'menu-selection-item' + ' ' + this.state.active5}>DESSERTS</motion.button>
        </div>
        <motion.div initial={{x:-100}} animate={{ x: -50 }} drag="x" dragConstraints={{top: 0, bottom: 0, left: 10, right: 0}}  onDragEnd={
    (event, info) => this.setState((prevState) => ({
      count: prevState.count +1, menuSection: sections[this.state.count]
    }))
  }className='menu-items-container'>
          {this.state.menuSection}
         
        </motion.div>
      </div>
    )
  }
}
