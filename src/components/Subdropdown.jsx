import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import coupon from "../imgs/coupon.png";

const Subdropdown = ({ options, setHoveredOption }) => {
  if (options === "Digital Coupons") {
    return (
      <div
        className="flex flex-col bg-slate-200 px-3 py-2 rounded-tr-lg rounded-br-lg text-black"
        onMouseLeave={() => {
          setHoveredOption("");
        }}
      >
        <div className="flex justify-center">
          <img src={coupon} className="w-[150px]"></img>
        </div>

        <p className="whitespace-nowrap text-base">Activate & Save!</p>
        <p className="whitespace-nowrap text-xs">
          Activate digital coupons online
        </p>
        <p className="whitespace-nowrap text-xs">for savings at checkout.</p>
        <button className="mx-3 mt-3 py-2 rounded-lg bg-[#c8102e] text-slate-100 whitespace-nowrap text-sm">
          Browse Coupons
        </button>
      </div>
    );
  } else {
    return (
      <div
        className="flex flex-col bg-slate-200 px-0 py-0 rounded-tr-lg rounded-br-lg text-black"
        onMouseLeave={() => {
          setHoveredOption("");
        }}
      >
        {options.map((option, index) => {
          return (
            <div key={index} className="flex hover:bg-white py-2 pr-2 pl-2 ">
              <p className="whitespace-nowrap text-base">{option}</p>
              <div className="flex grow justify-end ml-3">
                <IoIosArrowForward className="mt-1 text-lg ml-4 mr-1" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Subdropdown;
