import React from "react";
import { LuStore } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import MainBanner from "../imgs/winwintwins.png";
import smallBanner from "../imgs/shorttwins.png";
import longcar from "../imgs/longcar.png";
import shortcar from "../imgs/couponHeader.png";

const Banner = () => {
  return (
    <div className="flex flex-col mx-0 px-0 pb-[2rem]">
      <div className="flex justify-start py-2 pl-3 shadow1 lg-:hidden hover:cursor-pointer">
        <LuStore className="text-lg mt-[3px] mr-1.5" />
        <h1 className="font-semibold underline">ST. JOHNS COMMONS</h1>
      </div>

      <div className="flex flex-col lg-:flex-row lg-:hidden md:p-[1rem]">
        <img
          src={smallBanner}
          className="sm:hidden w-full h-auto hover:cursor-pointer"
        ></img>
        <img
          src={MainBanner}
          className="hidden sm:flex w-full h-auto my-[1rem] px-5 hover:cursor-pointer rounded-md"
        ></img>

        <img
          src={shortcar}
          className="sm:hidden hover:cursor-pointer"
        />
        <img
          src={longcar}
          className="hidden sm:flex md:my-[1rem] px-5 hover:cursor-pointer rounded-md"
        />
      </div>

      <div className="hidden mt-5 lg-:flex grow justify-center ">
        <div className="flex ml-2">
          <img src={MainBanner} className="hover:cursor-pointer rounded-md" />
        </div>
        <div className="flex ml-10 mr-2">
          <img src={shortcar} className="hover:cursor-pointer rounded-md" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row shadow1 py-3 pl-[2rem] lg:pl-[14rem] sm:mt-5">
        <p>Don’t miss out on savings picked just for you!</p>
        <div className="flex sm:ml-3">
          <p className="font-bold cursor-pointer">Log in / Sign up</p>
          <IoIosArrowForward className="text-lg mt-1 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
