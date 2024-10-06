import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import EmptyCart from "../img/emptyCart.svg";
import { actionType } from "../utils/Reducer";
import { useStateValue } from "../utils/StateProvider";
import CartItems from "./CartItems";

function CartContainer() {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
 
  // const [tot,setTot]=useState(null);
  // const [flag,setFlag]=useState(false);

  const [tot, setTot] = useState(null);
const [flag, setFlag] = useState("");

// useEffect(() => {
//   let totalPrice = cartItems.reduce(function (accumulator, item) {
//     return accumulator + item.qty * item.price;
//   }, 0);
//   setTot(totalPrice);
// }, [cartItems]);

// useEffect(() => {
//   console.log(tot);
// }, [tot]);

// // Update the flag when needed
// const updateFlag = () => {
//   setFlag(!flag);
// };


  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };


  useEffect(()=>{
    let totalPrice=cartItems.reduce(function(accumulator,item){
      return accumulator +(item.qty * item.price);
    },0);
    setTot(totalPrice);
    console.log(tot);

  },[cartItems,flag]);

  const clearCart=()=>{
    dispatch({
      type:actionType.SET_CART_ITEMS,
      cartItems:[],
    })
    localStorage.setItem('cartItems',JSON.stringify([]));
  }


  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-[375px] h-screen bg-white drop-shadow-md flex flex-col z-[101] "
    >
      <div className="w-full items-center flex justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdOutlineKeyboardBackspace
            className="text-gray-500 text-3xl "
            onClick={showCart}
          />
        </motion.div>

        <p className="text-gray-800 text-lg font-semibold ">Cart</p>

        <motion.p
        onClick={clearCart}
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 px-2 p-1 my-2 bg-gray-100 rounded-md
hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-gray-500 text-base"
        >
          Clear <RiRefreshFill />{" "}
        </motion.p>
      </div>

      {/* bottom part */}
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-[#282a2c]  rounded-t-[2rem] flex flex-col ">
          <div className="w-full h-[340px] md:h-42 px-6 py-10 flex flex-col gap-2  overflow-y-scroll hide-scrollbar scrollbar-none ">
            {/* cartIteeeeems */}
            {cartItems &&
              cartItems.map((item) => (
               <CartItems   key={item.id} item={item}/>
              ))}
          </div>
          {/* cart total section */}

          <div className="w-full flex-1 bg-[#343739] rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2 ">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg ">Sub Total</p>
              <p className="text-gray-400 text-lg ">${tot}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg ">Delivery</p>
              <p className="text-gray-400 text-lg ">$1.5</p>
            </div>

            <div className="w-full border-b border-gray-600 my-2 "></div>

            <div className="w-full flex items-center justify-between">
              <p className="text-gray-200 text-xl font-semibold">Total</p>
              <p className="text-gray-200 text-xl font-semibold">${tot +1.5}</p>
            </div>

            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-300 to-orange-500 text-gray-50 text-lg my-2 hover:shadow-lg  "
              >
                Check out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-300 to-orange-500 text-gray-50 text-lg my-2 hover:shadow-lg  "
              >
                Login to check out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6 ">
          <img src={EmptyCart} alt="" />
          <p className="text-xl text-gray-500 font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
}

export default CartContainer;
