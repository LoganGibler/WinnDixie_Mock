import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Transition } from "@headlessui/react";
import Subdropdown from "./Subdropdown";

const DropdownMenu = ({ options, showDropdown }) => {
  // submenu options->
  const departments = ["Bakery", "Certified Beef", "Deli", "Kosher"];
  const shopOnline = ["Start Shopping", "Learn more"];
  const recipes = ["Recipes Overview", "Favorite Recipe"];
  const ourBrands = ["Our brands", "Know & Love"];
  const winndixieRewards = [
    "About Winn-Dixie Rewards",
    "Big App Deal",
    "Percent back",
  ];

  const [hoveredOption, setHoveredOption] = useState("");

  const handleHover = (option) => {
    setHoveredOption(option);
  };

  const handleUnhover = () => {
    setHoveredOption("");
  };

  return (
    <Transition
      appear={true}
      show={showDropdown}
      enter="transition-all duration-650 ease-out"
      enterFrom="-mt-3 opacity-0 scale-y-0"
      enterTo="opacity-100 scale-y-100"
      leave="transition-all duration-650 ease-in"
      leaveTo="-mt-3 opacity-0 scale-y-0"
    >
      <div className="absolute flex mt-4 bg-white rounded-br-lg rounded-tr-lg rounded-bl-lg shadow-xl">
        <div className="px-0 py-0 flex flex-col">
          {options.length
            ? options.map((option, index) => {
                return (
                  <div key={index} className="">
                    <div
                      className="flex px-2 grow py-2 text-base text-black hover:bg-slate-200 hover:cursor-pointer"
                      onMouseOver={() => handleHover(option)}
                      //   onMouseLeave={() => handleUnhover()}
                    >
                      <p className="whitespace-nowrap">{option}</p>
                      <div className="flex grow justify-end">
                        <IoIosArrowForward className="mt-1 text-lg ml-5" />
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>

        {/* departmentSubCard */}
        {hoveredOption === "Departments" ? (
          <Subdropdown
            options={departments}
            setHoveredOption={setHoveredOption}
          />
        ) : null}
        {hoveredOption === "Shop online" ? (
          <Subdropdown
            options={shopOnline}
            setHoveredOption={setHoveredOption}
          />
        ) : null}
        {hoveredOption === "Recipes" ? (
          <Subdropdown options={recipes} setHoveredOption={setHoveredOption} />
        ) : null}
        {hoveredOption === "Our brands" ? (
          <Subdropdown
            options={ourBrands}
            setHoveredOption={setHoveredOption}
          />
        ) : null}

        {/* SavingsSubcard */}
        {hoveredOption === "Digital Coupons" ? (
          <Subdropdown
            options={"Digital Coupons"}
            setHoveredOption={setHoveredOption}
          />
        ) : null}

        {/* {rewardsSubcard} */}
        {hoveredOption === "Winn-Dixie rewards" ? (
          <Subdropdown
            options={winndixieRewards}
            setHoveredOption={setHoveredOption}
          />
        ) : null}
      </div>
    </Transition>
  );
};

export default DropdownMenu;
