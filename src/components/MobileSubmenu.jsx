import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const MobileSubMenu = ({ section, options, mobileSubMenuActive }) => {
  return (
    <Transition
      appear={true}
      show={menuActive}
      enter="transition-all duration-450"
      enterFrom="-ml-[20rem]"
      enterTo=""
      leave="transition-all duration-500"
      leaveTo="-ml-[20rem]"
    >
      <div className="fixed top-0 bottom-0 w-[310px] bg-[#f9f9f9] z-11">
        <div className="flex border-b-[1px]">
          <IoIosArrowBack className="text-lg" />
          <p>Back to main menu</p>
        </div>
      </div>
    </Transition>
  );
};

export default MobileSubMenu;
