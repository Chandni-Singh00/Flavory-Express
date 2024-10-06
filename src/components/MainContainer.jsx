import React, { useRef, useState ,useEffect} from "react";
import Home from "./Home";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import {useStateValue} from '../utils/StateProvider'
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";

function MainContainer() {
  const [{foodItems,cartShow},dispatch]=useStateValue();

  const [scrollvalue,setScrollValue]=useState(0);
  const [togle,settoggle]=useState(false);
  
  useEffect(()=>{},[scrollvalue]);
console.log(togle)
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <Home />
      <section className="w-full py-2">
        <div className="w-full flex items-center justify-between">
          <p
            className="text-2xl font-semibold capitalize text-gray-800 relative
        before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:bottom-0 before:left-0 before:bg-gradient-to-tr from-orange-700  to-orange-300 transition-all ease-in-out duration-100"
          >
            {" "}
            Our fresh & healthy fruits
          </p>
          <div className="hidden md:flex items-center gap-3">
            <motion.div whileTap={{scale:0.75}} className="w-8 h-8 rounded-lg bg-orange-400 hover:bg-orange-500 cursor-pointer 
            transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"><MdChevronLeft onClick={()=>setScrollValue(-200)} className="text-lg text-white"/></motion.div>
            <motion.div whileTap={{scale:0.75}} className="w-8 h-8 rounded-lg bg-orange-400 hover:bg-orange-500 cursor-pointer 
            transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"><MdChevronRight onClick={()=>setScrollValue(+200)}  className="text-lg text-white"/></motion.div>
          </div>
        </div>
        <RowContainer scrollValue={scrollvalue}  flag={false} data={foodItems?.filter(n=>n.category==='fruits')}/>
      </section>

<button className=""  onClick={()=>{settoggle(true)}}>Menu Container</button>
        {togle && (<MenuContainer/> )}


       {cartShow &&  (<CartContainer/>)}
    </div>
  );
}

export default MainContainer;
