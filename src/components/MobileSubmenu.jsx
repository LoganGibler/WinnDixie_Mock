import React from "react";
import { Transition } from "@headlessui/react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const MobileSubMenu = ({
  mobileSubOptionsTitle,
  subOptions,
  mobileSubMenuActive,
  setMobileSubMenuActive,
}) => {
  const handleMenuClose = () => {
    setMobileSubMenuActive(false);
  };
  return (
    <Transition
      appear={true}
      show={mobileSubMenuActive}
      enter="transition-all duration-450"
      enterFrom="-ml-[20rem]"
      enterTo=""
      leave="transition-all duration-500"
      leaveTo="-ml-[20rem]"
    >
      <div className="fixed px-5 top-0 bottom-0 w-[310px] bg-[#f9f9f9] z-20">
        <div
          className="flex border-b-[1px] border-slate-300 py-4"
          onClick={() => handleMenuClose()}
        >
          <IoIosArrowBack className="text-xl mt-[5px] ml-0 mr-2" />
          <p className="text-xl">Back to main menu</p>
        </div>

        <div className="flex py-2 border-b-[1px] border-slate-300">
          <p className="text-xl font-semibold py-3 ml-1">
            {mobileSubOptionsTitle}
          </p>
        </div>

        <div className="flex flex-col">
          {subOptions.map((option, index) => {
            return (
              <div
                key={index}
                className="flex py-3 px-2 hover:bg-slate-200 rounded-lg mt-1.5"
              >
                <p className="">{option}</p>
                <div className="flex grow justify-end">
                  <IoIosArrowForward className="mt-[3px]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Transition>
  );
};

export default MobileSubMenu;
