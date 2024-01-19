import React from "react";
import smallmeat from "../imgs/smallMeat.png";
import bigmeat from "../imgs/bigmeat.png";
import { LuArrowUpRightSquare } from "react-icons/lu";
import whiteOnlineShopping from "../imgs/whiteshoponline.png";
import redOnlineShopping from "../imgs/redonlinegrocery.png";
import { IoIosArrowForward } from "react-icons/io";

const Deals = () => {
  const productDeals = [
    {
      productName: "GROUND BEEF MARKET STYLE, 1 Pound",
      productImg: bigmeat,
      productPrice: "3.99",
      productPriceUnit: "lb",
      productPriceSave: "Save $2.00",
      productPriceSaveUnit: "lb",
      productPriceSavePercent: "25%",
      productPriceSaveValid: "Valid 1/6 - 2/6",
    },
    {
      productName: "GROUND BEEF FOR STEW LEAN, 1 Pound",
      productImg: smallmeat,
      productPrice: "6.99",
      productPriceUnit: "lb",
      productPriceSave: "Save $3.00",
      productPriceSaveValid: "Valid 1/6 - 3/6",
    },
  ];

  return (
    <div className="flex flex-col mt-2 pb-4 lg:pb-10">
      <div className="flex pl-4 pb-1 md:px-[1rem] md:justify-center">
        <div className="flex justify-start w-[820px] lg:w-[700px]">
          <h1 className="font-bold text-xl md:text-2xl ">Deals near you</h1>
          <div className="hidden md:flex justify-end grow mt-1.5 font-semibold text-[#c8102e] hover:cursor-pointer lg:pb-3">
            See all deals <IoIosArrowForward className="text-xl  mt-0.5" />
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col md:flex-row md:justify-center">
        {productDeals.map((product, index) => {
          return (
            <div
              key={index}
              className="flex px-2 py-3 mt-1 md:mt-0 border-t-[1px] md:border-[1px] md:rounded-md border-slate-300 md:mx-3 md:flex-col md:w-[260px] lg:w-[220px] xl:w-[250px]"
            >
              <div className="flex items-center justify-center md:h-[150px]">
                <img
                  src={product.productImg}
                  className="max-w-[80px] h-auto md:max-w-[140px]"
                ></img>
              </div>
              <div className="flex flex-col px-2">
                <div className="flex">
                  <p className="font-bold text-sm">{product.productName}</p>
                </div>
                <div className="flex">
                  <p className="text-sm">${product.productPrice}</p>
                  <p className="text-sm ml-1">{product.productPriceUnit}</p>
                </div>
                <div className="flex">
                  <p className="text-sm text-[#c8102e]">
                    {product.productPriceSave}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-sm text-[#c8102e]">
                    {product.productPriceSaveValid}
                  </p>
                </div>
              </div>
              <div className="grow flex justify-end md:hidden">
                <div className="flex items-center justify-center">
                  <LuArrowUpRightSquare className="text-2xl text-[#c8102e]" />
                </div>
              </div>
              <div className="hidden md:flex justify-center grow"></div>
              <button className="bg-[#c8102e] rounded-md py-2 text-white font-semibold hidden md:flex text-center justify-center">
                Start Shopping
              </button>
            </div>
          );
        })}
        <div className="flex px-2 py-3 border-t-[1px] border-b-[1px] md:border-[1px] md:rounded-md border-slate-300 md:flex-col md:mx-2 md:bg-[#c8102e] md:text-white md:w-[260px] lg:w-[220px] xl:w-[250px]">
          <div className="md:flex md:justify-center">
            <img
              className="flex md:hidden ml-1.5"
              src={whiteOnlineShopping}
            ></img>
            <img className="hidden md:flex" src={redOnlineShopping}></img>
          </div>

          <div className="flex flex-col px-3">
            <h1 className="font-bold text-lg">Order your groceries online</h1>
            <p className="text-sm">Shop and order groceries online.</p>
          </div>
          <div className="flex grow justify-end pr-1">
            <LuArrowUpRightSquare className="text-2xl text-[#c8102e] mt-6" />
          </div>
          <div className="hidden justify-center grow md:flex">
            <button className="rounded-md bg-[#f9f9f9] text-[#c8102e] py-2 font-semibold grow hover:cursor-pointer whitespace-nowrap">
              Shop online now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:hidden">
        <div className="my-5">
          <button className="bg-[#c8102e] px-[5rem] text-white text-lg py-2 rounded-md font-bold hover:cursor-pointer">
            See all deals
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deals;
