import React, { useState } from "react";
import logo from "../imgs/DixieLogo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { LuStore } from "react-icons/lu";
import { TbMinusVertical } from "react-icons/tb";
import DropdownMenu from "./DropdownMenu";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Navbar = ({
  menuActive,
  setMenuActive,
  showDropdown,
  setShowDropdown,
}) => {
  const [dropdownActive, setDropdownActive] = useState("");
  const [activeNavLink, setActiveNavLink] = useState("");

  const shoppingOptions = [
    "Shop online",
    "Gift cards",
    "Departments",
    "Recipes",
    "Our brands",
    "Share a meal",
  ];

  const savingOptions = ["Weekly Ad", "Digital Coupons", "Coupon Kiosk"];
  const rewardOptions = [
    "Winn-Dixie rewards",
    "Download the app",
    "Eligible Products",
  ];

  const pharmacyOptions = ["Pharmacy Closures"];

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  const handleDropdownClick = (option) => {
    setDropdownActive(option);
    setShowDropdown(true);

    if (option === "") {
      setShowDropdown(false);
    }
  };

  return (
    <div className="flex flex-col bg-[#c8102e] px-2 lg-:px-6 pt-2.5 pb-2 z-10">
      <div className="flex">
        {!menuActive ? (
          <RiMenu3Line
            onClick={handleMenuClick}
            className="text-slate-100 text-[30px] mt-[6px] lg-:hidden ml-1"
          />
        ) : (
          <RiCloseLine
            onClick={handleMenuClick}
            className="text-slate-100 text-[30px] mt-1 lg-:hidden ml-1"
          />
        )}
        <div className="lg-:hidden mt-0.5 mr-3 lg-:mr-0 flex grow justify-center">
          <img src={logo} className="h-auto hover:cursor-pointer"></img>
        </div>
        <div className="lg:hidden hidden lg-:flex">
          <img src={logo} className="h-auto hover:cursor-pointer"></img>
        </div>
        <div className="hidden lg-:flex grow justify-end text-slate-100">
          <div className="flex mx-2 px-2 font-semibold mt-[6px]">
            <LuStore className="text-lg mt-[3px] mr-1.5" />
            St. Johns Commons
          </div>
          <div className="flex mt-[2px] hover:cursor-pointer">
            <CgProfile className="mt-[7px] text-lg" />
            <p className="font-semibold mt-1 pl-1 border-b-[1px] border-[#c8102e] hover:border-slate-100">
              Login / Signup
            </p>
          </div>
        </div>
      </div>

      <div className="flex text-slate-100 font-semibold mt-1">
        <div className="hidden ml-0 lg:flex">
          <img src={logo} className="h-auto hover:cursor-pointer"></img>
        </div>

        <div className="text-slate-100 mt-[3px] lg-:grow lg-:justify-center font-semibold lg-:text hidden lg-:flex lg-:text-xl">
          <div className="mr-3 ml-[2rem] mt-[3px] border-[#c8102e] border-b-[1px] hover:cursor-pointer hover:border-slate-100 pb-1">
            <p
              className="flex"
              onClick={() =>
                dropdownActive === "Shopping"
                  ? handleDropdownClick("")
                  : handleDropdownClick("Shopping")
              }
              onMouseOver={() => {
                setActiveNavLink("Shopping");
              }}
              onMouseLeave={() => {
                setActiveNavLink("");
              }}
            >
              Shopping{" "}
              {activeNavLink === "Shopping" ? (
                dropdownActive !== "Shopping" ? (
                  <IoIosArrowUp className="text-xl ml-0.5 mt-1" />
                ) : (
                  <IoIosArrowDown className="text-xl ml-0.5 mt-1" />
                )
              ) : (
                <IoIosArrowUp className="text-xl ml-0.5 mt-1 text-[#c8102e]" />
              )}
            </p>

            {dropdownActive === "Shopping" ? (
              <DropdownMenu
                options={shoppingOptions}
                showDropdown={showDropdown}
              />
            ) : null}
          </div>

          <div className="mx-3 mt-[3px] border-[#c8102e] border-b-[1px] hover:cursor-pointer hover:border-slate-100 pb-1">
            <p
              className="flex"
              onClick={() =>
                dropdownActive === "Savings"
                  ? handleDropdownClick("")
                  : handleDropdownClick("Savings")
              }
              onMouseOver={() => {
                setActiveNavLink("Savings");
              }}
              onMouseLeave={() => {
                setActiveNavLink("");
              }}
            >
              Savings{" "}
              {activeNavLink === "Savings" ? (
                dropdownActive !== "Savings" ? (
                  <IoIosArrowUp className="text-xl ml-0.5 mt-1" />
                ) : (
                  <IoIosArrowDown className="text-xl ml-0.5 mt-1" />
                )
              ) : (
                <IoIosArrowUp className="text-xl ml-0.5 mt-1 text-[#c8102e]" />
              )}
            </p>
            {dropdownActive === "Savings" ? (
              <DropdownMenu
                options={savingOptions}
                showDropdown={showDropdown}
              />
            ) : null}
          </div>

          <div className="mx-3 mt-[3px] border-[#c8102e] border-b-[1px] hover:cursor-pointer hover:border-slate-100 pb-1">
            <p
              className="flex"
              onClick={() =>
                dropdownActive === "Rewards"
                  ? handleDropdownClick("")
                  : handleDropdownClick("Rewards")
              }
              onMouseOver={() => {
                setActiveNavLink("Rewards");
              }}
              onMouseLeave={() => {
                setActiveNavLink("");
              }}
            >
              Rewards{" "}
              {activeNavLink === "Rewards" ? (
                dropdownActive !== "Rewards" ? (
                  <IoIosArrowUp className="text-xl ml-0.5 mt-1" />
                ) : (
                  <IoIosArrowDown className="text-xl ml-0.5 mt-1" />
                )
              ) : (
                <IoIosArrowUp className="text-xl ml-0.5 mt-1 text-[#c8102e]" />
              )}
            </p>
            {dropdownActive === "Rewards" ? (
              <DropdownMenu
                options={rewardOptions}
                showDropdown={showDropdown}
              />
            ) : null}
          </div>

          <div className="mx-3 mt-[3px] border-[#c8102e] border-b-[1px] hover:cursor-pointer hover:border-slate-100 pb-1">
            <p
              className="flex"
              onClick={() =>
                dropdownActive === "Pharmacy"
                  ? handleDropdownClick("")
                  : handleDropdownClick("Pharmacy")
              }
              onMouseOver={() => {
                setActiveNavLink("Pharmacy");
              }}
              onMouseLeave={() => {
                setActiveNavLink("");
              }}
            >
              Pharmacy{" "}
              {activeNavLink === "Pharmacy" ? (
                dropdownActive !== "Pharmacy" ? (
                  <IoIosArrowUp className="text-xl ml-0.5 mt-1" />
                ) : (
                  <IoIosArrowDown className="text-xl ml-0.5 mt-1" />
                )
              ) : (
                <IoIosArrowUp className="text-xl ml-0.5 mt-1 text-[#c8102e]" />
              )}
            </p>
            {dropdownActive === "Pharmacy" ? (
              <DropdownMenu
                options={pharmacyOptions}
                showDropdown={showDropdown}
              />
            ) : null}
          </div>
        </div>

        <div className="hidden lg-:flex grow justify-end mt-[10px]">
          <p className="border-[#c8102e] border-b-[1px] hover:cursor-pointer hover:border-slate-100 pb-1">
            Shop Online
          </p>
          <TbMinusVertical className="text-2xl mt-[1px]" />
          <p className="border-[#c8102e] border-b-[1px] hover:cursor-pointer hover:border-slate-100 pb-1">
            Weekly Ad
          </p>
          <TbMinusVertical className="text-2xl mt-[1px]" />
          <p className="border-[#c8102e] border-b-[1px] hover:cursor-pointer hover:border-slate-100 pb-1">
            Digital Coupons
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
