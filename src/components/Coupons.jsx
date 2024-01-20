import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const Coupons = ({ coupons }) => {
  return (
    <div className="flex flex-col pb-[1rem]">
      <div className="flex pl-4 md:px-[1rem] md:justify-center border-b-[0px] border-slate-300">
        <div className="flex justify-start w-[820px] lg:w-[700px]">
          <h1 className="font-bold text-xl md:text-2xl">Digital coupons</h1>
          <div className="hidden md:flex justify-end grow mt-1.5 lg:pb-3 font-semiboldtext-[#c8102e] hover:cursor-pointer">
            See all coupons <IoIosArrowForward className="text-xl  mt-0.5" />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-2 md:flex-row md:justify-center">
        {coupons.map((coupon, index) => {
          return (
            <div
              className="flex bg-inherit py-4 px-3 border-b-[1px] border-slate-300 md:flex-col md:mx-2.5 md:rounded-md md:border-[1px] md:border-slate-300 md:mt-2 md:px-3 md:py-3 md:w-[260px] lg:w-[220px] xl:w-[250px]"
              key={index}
            >
              <div className="flex items-center justify-center mr-3 md:h-[160px]">
                <img
                  src={coupon.productImg}
                  className="max-w-[90px] h-auto md:max-w-[150px]"
                ></img>
              </div>
              <div className="mr-5 flex flex-col">
                <h1 className="font-bold">{coupon.productPrice}</h1>
                <p className="truncated-text-sm text-sm">{coupon.couponName}</p>
                <p className="text-sm">{coupon.expiration}</p>
              </div>
              <div className="flex grow justify-end pr-1.5 md:hidden">
                <div className="flex items-center justify-center">
                  <FaCirclePlus className="text-2xl text-[#c8102e] hover:cursor-pointer" />
                </div>
              </div>
              <div className="hidden md:flex grow"></div>
              <button className="bg-[#c8102e] mt-6 rounded-md py-2 text-white font-semibold hidden md:flex justify-center">
                <FaCirclePlus className="text-xl mt-[3px] mr-3" />
                Add coupon
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex grow justify-center items-center">
        <button
          className="bg-[#c8102e] text-lg text-white mt-5 rounded-md px-[5rem] font-bold py-2 md:hidden hover:cursor-pointer
        "
        >
          See all coupons
        </button>
      </div>
    </div>
  );
};

export default Coupons;
