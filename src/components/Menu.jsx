import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { RiCloseLine } from "react-icons/ri";
import whiteWDlogo from "../imgs/white-bg-WDlogo.png";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { PiGear } from "react-icons/pi";
import MobileSubMenu from "./MobileSubmenu";

const Menu = ({
  menuActive,
  setMenuActive,
  setMobileSubOptionTitle,
  setSubOptions,
  setMobileSubMenuActive,
}) => {
  const handleMenuClose = () => {
    setMenuActive(!menuActive);
  };
  const shoppingOptions = [
    "Shop online",
    "Gift cards",
    "Departments",
    "Recipes",
    "Our brands",
    "Share a meal",
  ];
  const rewardOptions = [
    "Winn-Dixie rewards",
    "Download the app",
    "Eligible Products",
  ];
  const pharmacyOptions = ["Pharmacy Closures"];
  const savingOptions = ["Weekly Ad", "Digital Coupons", "Coupon Kiosk"];

  const handleSubmenuOpen = (optionTitle, subOptions) => {
    setMobileSubMenuActive(true);
    setMobileSubOptionTitle(optionTitle);
    setSubOptions(subOptions);
  };

  return (
    <Transition
      appear={true}
      show={menuActive}
      enter="transition-all duration-400"
      enterFrom="-ml-[20rem]"
      enterTo=""
      leave="transition-all duration-400"
      leaveTo="-ml-[20rem]"
    >
      <div className="fixed top-0 bottom-0 w-[310px] bg-[#f9f9f9] z-10">
        <div className="flex flex-col pr-2 pl-4">
          <div className="flex border-b-[1px] border-slate-300 pb-1">
            <div className="mt-[10px]">
              <img src={whiteWDlogo} className="mt-[2px] w-auto h-auto"></img>
            </div>
            <div className="flex grow justify-end mt-2.5 hover:cursor-pointer ">
              <CgProfile className="mt-[5px] text-lg" />
              <p className="font-semibold text-[14px] mt-1 pl-1 border-b-[1px] border-[#f9f9f9] hover:border-slate-300">
                Login / Signup
              </p>
            </div>
            <div className="flex grow justify-end">
              <RiCloseLine
                onClick={handleMenuClose}
                className="00 text-[32px] text-[#c8102e] mt-[8px]"
              />
            </div>
          </div>

          <div className="flex flex-col mt-3 ml-1 font-semibold text-[17px] border-b-[1px] pb-6 border-slate-300">
            <div className="flex grow py-2 pl-1 hover:bg-slate-200 rounded-lg mt-1.5">
              <p className="">Weekly Ad</p>
            </div>

            <div className="flex grow py-2 pl-1 hover:bg-slate-200 rounded-lg mt-2.5">
              <p className="">Digital Coupons</p>
            </div>

            <div className="flex grow py-2 pl-1 hover:bg-slate-200 rounded-lg mt-2.5">
              <p className=""> Shop online</p>
            </div>
          </div>
          <div className="flex flex-col mt-3 ml-0 font-semibold text-[17px] border-b-[1px] pb-6 border-slate-300">
            <div
              className="flex mt-3 py-2 rounded-lg px-2 hover:cursor-pointer hover:bg-slate-200"
              onClick={() => handleSubmenuOpen("Shopping", shoppingOptions)}
            >
              <p className="">Shopping</p>
              <div className="flex grow justify-end">
                <IoIosArrowForward className="mt-[3px]" />
              </div>
            </div>

            <div
              className="flex mt-3 py-2 rounded-lg px-2 hover:cursor-pointer hover:bg-slate-200"
              onClick={() => handleSubmenuOpen("Savings", savingOptions)}
            >
              <p className="">Savings</p>
              <div className="flex grow justify-end">
                <IoIosArrowForward className="mt-[3px]" />
              </div>
            </div>

            <div
              className="flex mt-3 py-2 rounded-lg px-2 hover:cursor-pointer hover:bg-slate-200"
              onClick={() => handleSubmenuOpen("Rewards", rewardOptions)}
            >
              <p className="">Rewards</p>
              <div className="flex grow justify-end">
                <IoIosArrowForward className="mt-[3px]" />
              </div>
            </div>

            <div
              className="flex mt-3 py-2 rounded-lg px-2 hover:cursor-pointer hover:bg-slate-200"
              onClick={() => handleSubmenuOpen("Pharmacy", pharmacyOptions)}
            >
              <p className="">Pharmacy</p>
              <div className="flex grow justify-end">
                <IoIosArrowForward className="mt-[3px]" />
              </div>
            </div>
          </div>
          <div className="flex mt-5 ml-0 font-semibold text-[17px]">
            <div className="flex hover:bg-slate-200 rounded-lg px-2 py-2 grow">
              <PiGear className="text-xl mt-[3px] mr-1" />
              <p className="">Manage Account</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Menu;
