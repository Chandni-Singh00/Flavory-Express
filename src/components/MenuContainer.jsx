import React, { createFactory, useEffect, useState } from "react";
import {IoFastFood} from 'react-icons/io5';
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import {RowContainer} from '../components';
import { useStateValue } from "../utils/StateProvider";

function MenuContainer() {
    const [filter,setFilter]=useState('chicken');

    const [{foodItems},dispatch]=useStateValue();

  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center ">
        <p
          className="text-2xl font-semibold capitalize text-gray-800 relative
        before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:bottom-0 before:left-0
         before:bg-gradient-to-tr from-orange-700  to-orange-300 transition-all ease-in-out duration-100 mr-auto"

        >
          {" "}
          Our dishes
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none ">
       
       {categories && categories.map(category=>(
               <motion.div whileTap={{scale:0.75}} key={category.id} className={`group ${filter=== category.urlParamName? 'bg-red-600':'bg-[rgba(256,256,256,0.6)]'} w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center 
               justify-center hover:bg-red-600 duration-150 transition-all ease-in-out `} onClick={()=>setFilter(category.urlParamName)}>
                    <div className={`w-10 h-10 shadow-lg rounded-full ${filter=== category.urlParamName? 'bg-[rgba(256,256,256,0.6)]':'bg-red-600'} group-hover:bg-[rgba(256,256,256,0.6)] flex items-center justify-center `}>
                        <IoFastFood className="text-[rgba(256,256,256,0.6)] group-hover:text-gray-800 text-lg "/>
                    </div>
                    <p className={`text-sm ${filter=== category.urlParamName? 'text-white':'text-gray-900'} group-hover:text-white font-semibold`}>{category.name}</p>
               </motion.div>
       ))}
        </div>

        <div className="w-full">
          <RowContainer flag={false} data={foodItems?.filter(n=>n.category==filter)} />
        </div>
      </div>
    </section>
  );
}

export default MenuContainer; 
