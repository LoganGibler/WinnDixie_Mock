import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import coupon from "../imgs/coupon.png";

const Subdropdown = ({ options, setHoveredOption }) => {
  if (options[0] === "Digital") {
    return (
      <div
        className="flex flex-col bg-slate-200 px-2 py-1 rounded-tr-lg rounded-br-lg text-black"
        onMouseLeave={() => {
          setHoveredOption("");
        }}
      >
        <div className="flex">
          <img src={coupon} className=""></img>
        </div>
        <div className="flex">
          <p className="whitespace-nowrap">Activate & Save!</p>
        </div>
        <div className="mt-2">
          <p className="text-sm">
            Activate digital coupons online for savings at checkout.
          </p>
        </div>
        <div className="flex mt-3">
          <button className="px-4 py-2 rounded-lg bg-[#c8102e] text-slate-100 whitespace-nowrap text-sm">
            Browse Coupons
          </button>
        </div>
      </div>
    );
  }
  return (
    <div
      className="flex flex-col bg-slate-200 px-2 py-1 rounded-tr-lg rounded-br-lg text-black"
      onMouseLeave={() => {
        setHoveredOption("");
      }}
    >
      {options.map((option, index) => {
        return (
          <div
            key={index}
            className="flex hover:bg-white py-2 pr-2 pl-2 rounded-lg"
          >
            <p className="whitespace-nowrap">{option}</p>
            <div className="flex grow justify-end ml-3">
              <IoIosArrowForward className="mt-1 text-lg ml-4 mr-1" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Subdropdown;
