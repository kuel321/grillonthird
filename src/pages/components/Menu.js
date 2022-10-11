import React, { Component } from 'react'
import MenuAppetizers from './Menu Sections/MenuAppetizers'
import MenuEntrees from './Menu Sections/MenuEntrees'
import MenuSoups from './Menu Sections/MenuSoups';
import MenuSides from './Menu Sections/MenuSides';
import MenuDesserts from './Menu Sections/MenuDesserts';
import { withArtDirection } from 'gatsby-plugin-image';
import $ from 'jquery';
import createScrollSnap from 'scroll-snap'

import {isMobile} from 'react-device-detect';

import MenuBack from './Menu Sections/menuback.png'

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

    this.scrollPositions = ({
      0: 0,
      1: 179,
      2: 320,
      3: 510,
      5: 562,
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
      selectVar: 0,
      scrollNum: 100,
      scrollPos: 179,
    };
  }
 
  container = React.createRef()

  bindScrollSnap() {
    const element = this.container.current
    createScrollSnap(element, {
      snapDestinationX: '5px',
      duration: 0,
    }, () => console.log('snapped'))
  }

  componentDidMount() {
   //this.bindScrollSnap()
  }
  


  moveLeft = (y) => {
   
   
    if (this.state.count == 6 ) {
     

      this.setState((state, props) => ({
        count: 2,
        menuSection: this.sections[2],
        active1: "active",
      active2: "white",
      active3: "white",
      active4: "white",
      active5: "white",
      selectVar: 0,
      scrollPos: this.scrollPositions[0]
     }), ()=>{
      $('#selection-container').animate({
        scrollLeft: this.state.scrollPos}, 300);
        console.log("set count to 0")
      
     });



      /*
      console.log(this.state.count)
      console.log(this.state.menuSection)
      document.getElementById('selection-container').scrollTo({ left: 10, behavior:'smooth'})
      */

    }
    else {
      var menuSize = $('#menu' + this.state.count).width();
      this.setState((prevState) => ({
        count: prevState.count +1, menuSection: this.sections[this.state.count],
        active1: "white",
        active2: "white",
        active3: "white",
        active4: "white",
        active5: "white",
        [y]: "active",
       // selectVar: prevState.selectVar -200
       scrollNum: prevState.scrollNum + prevState.scrollNum,
       scrollPos: this.scrollPositions[prevState.count],
      
      }));


     // var menuSectionId = document.getElementById('menu' + this.state.count).offsetWidth;
      
      //document.getElementById('selection-container').scrollTo({left:  this.state.scrollNum, behavior:'smooth'})

      
      
  
     // $('#selection-container').scrollLeft(this.state.scrollPos);

     if (this.state.scrollPos == 0){

      this.setState((state, props) => ({
        scrollPos: this.scrollPositions[1]
     }), ()=>{
      $('#selection-container').animate({
        scrollLeft: this.state.scrollPos}, 300);
       // console.log(activePlaceNum + ' ' + this.scrollPositions[activePlaceNum])
     });

     }
     else {
      $('#selection-container').animate({
        scrollLeft: this.scrollPositions[this.state.count-1]}, 300);
        console.log(this.state.scrollPos);
     }

     
         

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
      let activePlace = y.split("");
   
      var activePlaceNum = parseInt(activePlace[6]);


      this.setState((prevState) => ({
        count: prevState.count -1, menuSection: this.sections[test-1],
        active1: "white",
        active2: "white",
        active3: "white",
        active4: "white",
        active5: "white",
        [y]: "active",
      scrollPos: this.scrollPositions[prevState.count -1]
     }), ()=>{
      $('#selection-container').animate({
        scrollLeft: this.scrollPositions[activePlaceNum -1]}, 300);
        
      
     });
   
    }
    
  }


    changeSection = (x, y) => {

    
     
    
    let activePlace = y.split("");
   
    var activePlaceNum = parseInt(activePlace[6]);
    var activePlaceNumPlus = activePlaceNum + 1;
    var activeButton = document.getElementById('menu' + activePlaceNum);
    
    if (isMobile) {


     
      this.setState((state, props) => ({
        scrollPos: this.scrollPositions[activePlaceNum-1]
     }), ()=>{
      $('#selection-container').animate({
        scrollLeft: this.state.scrollPos}, 300);
      // console.log(activePlaceNum + ' ' + this.scrollPositions[activePlaceNum])
     });
      
   

       
    }

    
   
    this.setState({
      menuSection: x,
      active1: "white",
      active2: "white",
      active3: "white",
      active4: "white",
      active5: "white",
      [y]: "active",
      count: activePlaceNumPlus, 
      
     
      
    })

   // console.log(this.state.scrollNum);

  

  

  }

  selectButton = () => {
    var menuSize = $('#menu' + this.state.count).width();
    this.setState((prevState) => ({
      scrollPos: prevState.scrollPos + menuSize,
    }))

    $('#selection-container').scrollLeft(this.state.scrollPos);
    
    console.log(menuSize);
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
      
      if (isMobile)
      {
        var dragOnOrOff = "x";
        var dragListenOrNot = true;
      }

      
     

    return (
      <div className='menu-container'>
        <div><button onClick={this.selectButton}>Scroll to three</button></div>
        <div className='menu-anchor' id="menu"></div>
        <h1 className='menu-title'>MENU</h1>
        <motion.div animate={{x: this.state.selectVar}} className='menu-selection-container' ref={this.container} id="selection-container">
          <motion.button whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }} onClick={() => this.changeSection(<MenuAppetizers />, "active1")} id="menu1" className={'menu-selection-item' + ' ' + this.state.active1}>APPETIZERS</motion.button>
          <motion.button whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }} onClick={() => this.changeSection(<MenuEntrees />, "active2")} id="menu2" className={'menu-selection-item' + ' ' + this.state.active2}>ENTREES</motion.button>
          <motion.button whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }} onClick={() => this.changeSection(<MenuSoups />, "active3")} id="menu3" className={'menu-selection-item' + ' ' + this.state.active3}>SOUPS & SALADS</motion.button>
          <motion.button whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }} onClick={() => this.changeSection(<MenuSides />, "active4")} id="menu4" className={'menu-selection-item' + ' ' + this.state.active4}>SIDES</motion.button>
          <motion.button whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }} onClick={() => this.changeSection(<MenuDesserts />, "active5")} id="menu5" className={'menu-selection-item' + ' ' + this.state.active5}>DESSERTS</motion.button>
          <motion.button whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }} onClick={() => this.changeSection(<MenuDesserts />, "active5")} id="menu5" className={'menu-selection-item' + ' ' + this.state.active5}>{' '}{' '}</motion.button>
        </motion.div>
        
    
       <div className='arrowContainer'>
        <motion.img initial={{x: -10}} animate={{x: [-10, 10, -10]}} transition={{duration: 1,  repeat: Infinity}} className='arrow' src='https://www.svgrepo.com/show/67470/right-arrow.svg'></motion.img>
       </div>
     
        <motion.div initial={{x:0}} animate={{ x: 0 }} drag={dragOnOrOff}  dragListener={dragListenOrNot} dragConstraints={{top: 0, bottom: 0, left: 0, right: 0}}  onDragEnd={(event, info) => this.swipeable(event, info)}
               
  className='menu-items-container'>
      
        <motion.div initial={{x: -150}} animate={{x:-50}} >{this.state.menuSection}</motion.div> 
        
        </motion.div>

      </div>
    )
  }
}
