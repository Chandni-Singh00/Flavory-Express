import React from "react";
import Delivery from "../img/delivery.png";
import Herobg from "../img/heroBg.png";
import { heroData } from "../utils/data";
function Home() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full overflow-x-hidden "
      id="home"
    >
      <div className="py-2  flex-1 flex flex-col items-start md:items-center justify-center p-2">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[3rem] md:text-[4.5rem] font-bold tracking-wider text-gray-800 ">
          The Fastest Delivery and delicious food in{" "}
          <span className="text-orange-600 text-[3rem] md:text-[5rem]">
            Your Area
          </span>
        </p>
        <p className="text-gray-600 text-base m-0 text-center md:w-[80%] tracking-wide ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem inventore reiciendis voluptas nihil, cumque magnam
          praesentium, incidunt atque dolores quas velit libero harum maiores
          ut.
        </p>
        <button
          type="button"
          className="md:w-auto bg-gradient-to-br from-orange-500 to-orange-300 w-full px-4 py-2 my-3 rounded-lg hover:shadow-lg transition-all ease-in-out duratio-100 "
        >
          Order Now
        </button>
      </div>

      <div className="py-2 flex-1 flex relative items-center">
        <img
          src={Herobg}
          className="lg:h-[650px] h-[700px] w-full lg:w-auto  ml-auto "
          alt="herobg"
        ></img>
        <div className="w-full  lg:h-full absolute lg:gap-4 gap-7 flex-wrap top-0 left-0 flex items-center justify-center px-32 lg:py-4 py-8">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-[190px ] p-5 drop-shadow-lg  w-[190px] min-w-[190px] lg:p-3 bg-[rgba(256,256,256,0.4)] backdrop-blur-md rounded-md flex flex-col items-center justify-center "
              >
                <img
                  src={n.imageSrc}
                  alt="i1"
                  className=" w-20 -mt-10 lg:w-40 lg:-mt-20"
                />
                <p className=" text-base lg:text-xl mt-2 lg:mt-4 font-semibold text-gray-800">
                  {n.name}
                </p>
                <p className="text-[12px]  lg:text-md text-gray-700 font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>
                <p className="text-md font-semibold text-gray-800">
                  <span className="text-sm text-red-600">$</span>
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
