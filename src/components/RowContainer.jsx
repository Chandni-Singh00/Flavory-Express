import React, { useEffect, useRef } from "react";
import i6 from "../img/i6.png";
import { motion } from "framer-motion";
import { MdShoppingBasket, MdStarOutline } from "react-icons/md";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../utils/StateProvider";
import { actionType } from "../utils/Reducer";
import { useState } from "react";

function RowContainer({ flag, data ,scrollValue}) {
   
  const [items,setItems]=useState([]);

  const [{cartItems},dispatch]=useStateValue();

  const rowContainer=useRef();

  useEffect(()=>{
   rowContainer.current.scrollLeft +=scrollValue
  },[scrollValue])

  // useEffect(() => {
  //   // Check if cart data exists in local storage
  //   const storedCart = localStorage.getItem('items');

  //   if (storedCart) {
  //     // If cart data exists, initialize the cart with the stored values
  //     setItems(JSON.parse(storedCart));
  //   }
  // }, []);

  const addtocart=()=>{
    dispatch(
      {
        type:actionType.SET_CART_ITEMS,
        cartItems:items,
      }
    )
   localStorage.setItem("cartItems",JSON.stringify(items))
//    const storedCartData = localStorage.getItem('cart');
//  const initialCartData = storedCartData ? JSON.parse(storedCartData) : [];
  }

  useEffect(()=>{
    addtocart();
   
  },[items])


  return (
    <div
    ref={rowContainer}
      className={`w-full items-center scroll-smooth  my-12 flex gap-3 ${
        flag
          ? "overflow-x-scroll"
          : "overflow-x-hidden justify-center flex-wrap"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="w-[275px] h-[200px] min-w-[275px] md:w-[300px] md:min-w-[340px] my-12  bg-[rgba(256,256,256,0.4)] rounded-lg py-2 px-4
            backdrop-blur-lg  hover:drop-shadow-lg flex flex-col items-center justify-evenly relative
             "
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className="w-40 -mt-8 h-40 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  whileHover={{ scale: 1.2 }}
                  src={item.imageURL}
                  alt="images"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.75 }}
                onClick={()=>setItems([...cartItems,item])}
                className="w-8 h-8 rounded-full items-center justify-center cursor-pointer hover:shadow-md flex bg-red-600"
              >
                <MdShoppingBasket className="text-white"  />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-base py-2 text-gray-700 font-semibold md:text-lg">
                {item.title}
              </p>
              <p className="mt-1 font-semibold text-lg text-gray-800">
                <span className="text-sm text-red-600">$</span>
                {item.price}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-[340px]" />
          <p className="text-xl text-gray-800 my-2 font-semibold">
            Item Not Available
          </p>
        </div>
      )}
    </div>
  );
}

export default RowContainer; 
