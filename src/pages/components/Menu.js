import React, { Component } from 'react'
import MenuAppetizers from './Menu Sections/MenuAppetizers'
import MenuEntrees from './Menu Sections/MenuEntrees'
import MenuSoups from './Menu Sections/MenuSoups';
import MenuSides from './Menu Sections/MenuSides';
import MenuDesserts from './Menu Sections/MenuDesserts';
import { withArtDirection } from 'gatsby-plugin-image';
import $ from 'jquery';

import { motion } from "framer-motion"

export default class Test extends Component {
  constructor(props) {
    super(props);

    this.sections = ({
      1: <MenuAppetizers />,
      2: <MenuEntrees />,
      3: <MenuSoups />,
      4: <MenuSides />,
      5: <MenuDesserts />
    })

    this.activeButtons = ({
      1: "active1",
      2: "active2",
      3: "active3",
      4: "active4",
      5: "active5",
    })


    this.state = {
      menuSection: <MenuAppetizers />,
      active1: "active",
      active2: "white",
      active3: "white",
      active4: "white",
      active5: "white",
      count: 2,
      drag: false,
    };
  }

  
  changeSection = (x, y) => {
    if (x > y);
    this.setState({
      menuSection: x,
      active1: "white",
      active2: "white",
      active3: "white",
      active4: "white",
      active5: "white",
      [y]: "active",
      
    })
/*gardenparkrentals123**/
  }

  moveLeft = (y) => {
   
    
    if (this.state.count == 6 ) {
      console.log("set count to 0")
      this.setState({
        count: 2,
        menuSection: this.sections[2],
        active1: "active",
      active2: "white",
      active3: "white",
      active4: "white",
      active5: "white",
        
   
        
      })
      console.log(this.state.count)
      console.log(this.state.menuSection)
    }
    else {
      this.setState((prevState) => ({
        count: prevState.count +1, menuSection: this.sections[this.state.count],
        active1: "white",
        active2: "white",
        active3: "white",
        active4: "white",
        active5: "white",
        [y]: "active",
      
      }));
    }
   
  }

  moveRight = (y) => {
   
    if (this.state.count == 2 ) {
      this.setState({
        count: 2,
        menuSection: this.sections[1],
        active1: "white",
        active2: "white",
        active3: "white",
        active4: "white",
        active5: "white",
        [y]: "active",
      })
    }

   
    else {
      console.log("swiped right");
      var test = this.state.count-1;
      console.log(test)
      this.setState((prevState) => ({
        count: prevState.count -1, menuSection: this.sections[test-1],
        active1: "white",
        active2: "white",
        active3: "white",
        active4: "white",
        active5: "white",
        [y]: "active",
      }));
    }
    
  }

  

 
  

  swipeable = (event, info) => {
    
    const offsetx = info.offset.x;
    const offsety = info.offset.y;
    const velocity = info.velocity.x;
    
    console.log(this.state.count);
    
    if (offsetx < -100){
      var activeButtonPlace = this.activeButtons[this.state.count];
      this.moveLeft(activeButtonPlace);

    }
    
    if (offsetx > 100  ) {
       
       if (this.state.count == 1) {
       var activeButtonPlace = this.activeButtons[this.state.count-1];
        this.moveRight(activeButtonPlace);
      }
      if (this.state.count == 2) {
        this.setState({
          count: 2,
          menuSection: this.sections[1],
          active1: "active",
          active2: "white",
          active3: "white",
          active4: "white",
          active5: "white",
         
        })
      }
      else {
        var activeButtonPlace = this.activeButtons[this.state.count-2];
        this.moveRight(activeButtonPlace);
      }
       
        
      
      
    }
   

  }

 

  

  render() {
      const sections = ({
        1: <MenuAppetizers />,
        2: <MenuEntrees />,
        3: <MenuSoups />,
        4: <MenuSides />,
        5: <MenuDesserts />
      })
      
      var dragOnOrOff = "false";
      var dragListenOrNot = false;
      if (window.innerWidth < 1100)
      {
        var dragOnOrOff = "x";
        var dragListenOrNot = true;
      }
     

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
     
        <motion.div initial={{x:0}} animate={{ x: 0 }} drag={dragOnOrOff}  dragListener={dragListenOrNot} dragConstraints={{top: 0, bottom: 0, left: 0, right: 0}}  onDragEnd={(event, info) => this.swipeable(event, info)}

  className='menu-items-container'>

        <motion.div initial={{x: -150}} animate={{x:-50}} >{this.state.menuSection}</motion.div> 
        
        </motion.div>

      </div>
    )
  }
}
