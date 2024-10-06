import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../utils/firebase_config";
import { useStateValue } from "../utils/StateProvider";
import { actionType } from "../utils/Reducer";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Header() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user ,cartShow,cartItems}, dispatch] = useStateValue();



  const login = async () => {
    if (!user) {
      const {
        user: { providerData },//here was user: { refreshToken ,providerData }
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    
    } else {
      setisMenu(!isMenu);
    }
  };
 
  const logout = () => {
    localStorage.clear("user", user);

    window.location.reload();
  };

  const showCart=()=>{
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  }


  const [isMenu, setisMenu] = useState(false);
  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full ">
        <Link to={"/"} className="flex cursor-pointer items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-gray-800 text-xl font-bold">E-restaurant</p>
        </Link>
        <div className="flex items-center gap-8 ml-auto">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 ml-auto"
          >
            <Link to={"/"}>
            <li className="text-base text-gray-500 cursor-pointer hover:text-red-300 duration-100 transition-all ease-in-out ">
              Home
            </li>
            </Link>
           
            <li className="text-base text-gray-500 cursor-pointer hover:text-red-300 duration-100 transition-all ease-in-out ">
              Menu
            </li>
            <li className="text-base text-gray-500 cursor-pointer hover:text-red-300 duration-100 transition-all ease-in-out ">
              About us
            </li>
            <li className="text-base text-gray-500 cursor-pointer hover:text-red-300 duration-100 transition-all ease-in-out ">
              Services
            </li>
          </motion.ul>

          <div className="relative flex item-center justify-center" onClick={showCart}>
            <MdShoppingBasket className="text-gray-500 text-2xl ml-8 cursor-pointer" />
            {cartItems && cartItems.length>0 && (
              
            <div className="w-5 h-5 rounded-full absolute -top-2 -right-2 bg-red-700 flex item-center cursor-pointer justify-center  ">
            <p className="text-xs items-center text-white font-semibold">
              {cartItems.length}
            </p>
          </div>
            )}
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              // onClick={() => setisMenu(!isMenu)}
              src={user ? user.photoURL : Avatar}
              alt="avatar"
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 0.9 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 top-17 right-10 shadow-xl rounded-lg flex flex-col absolute"
              >
                {user && user.email === "singhchandni2003@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className="px-4 py-2 flex items-center cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-gray-500 text-base "
                      onClick={() => setisMenu(!isMenu)}
                    >
                      New Item{" "}
                      <span className="px-4">
                        {" "}
                        <MdAdd />
                      </span>
                    </p>
                  </Link>
                )}

                <p
                  className="px-4 py-2 flex items-center cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-gray-500 text-base "
                  // onClick={() => setisMenu(!isMenu)}
                  onClick={logout}
                >
                  Logout{" "}
                  <span className="px-10">
                    {" "}
                    <MdLogout />
                  </span>
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/************************ * mobile**************************************************** */}
      <div className=" flex items-center justify-between md:hidden w-full h-full p-4">
        <div className="relative flex item-center justify-center" onClick={showCart}>
          <MdShoppingBasket className="text-gray-500 text-2xl ml-8 cursor-pointer" />
         {cartItems && cartItems.length>0 && (
           <div className="w-5 h-5 cursor-pointer rounded-full absolute -top-2 -right-2 bg-red-700 flex item-center justify-center  ">
           <p className="text-xs items-center text-white font-semibold"> {cartItems.length}</p>
         </div>
         )}
        </div>

        <Link to={"/"} className="flex cursor-pointer items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-gray-800 text-xl font-bold">E-restaurant</p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            onClick={login}
            src={user ? user.photoURL : Avatar}
            alt="avatar"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 0.9 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 top-17 right-0 shadow-xl rounded-lg flex flex-col absolute"
            >
              {user && user.email === "singhchandni2003@gmail.com" && (
                <Link to={"/createItem"}>
                  <p
                    className="px-4 py-2 flex items-center cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-gray-500 text-base "
                    onClick={() => setisMenu(!isMenu)}
                  >
                    New Item{" "}
                    <span className="px-4">
                      {" "}
                      <MdAdd />
                    </span>
                  </p>
                </Link>
              )}

              <ul
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                className="flex flex-col  "
              >
                <li
                  className="text-base text-gray-500 cursor-pointer hover:bg-slate-200 px-4 py-2 duration-100 transition-all ease-in-out"
                  onClick={() => setisMenu(!isMenu)}
                >
                  Home
                </li>
                <li
                  className="text-base text-gray-500 cursor-pointer hover:bg-slate-200 px-4 py-2 duration-100 transition-all ease-in-out"
                  onClick={() => setisMenu(!isMenu)}
                >
                  Menu
                </li>
                <li
                  className="text-base text-gray-500 cursor-pointer hover:bg-slate-200 px-4 py-2 duration-100 transition-all ease-in-out"
                  onClick={() => setisMenu(!isMenu)}
                >
                  About us
                </li>
                <li
                  className="text-base text-gray-500 cursor-pointer hover:bg-slate-200 px-4 py-2 duration-100 transition-all ease-in-out"
                  onClick={() => setisMenu(!isMenu)}
                >
                  Services
                </li>
              </ul>
              <p
                className="m-2 px-4 py-2 rounded-md shadow-md flex items-center justify-center cursor-pointer hover:bg-slate-300 transition-all ease-in-out duration-100 text-gray-600 text-base "
                // onClick={() => setisMenu(!isMenu)}
                onClick={logout}
              >
                Logout{" "}
                <span className="px-5">
                  {" "}
                  <MdLogout />
                </span>
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
