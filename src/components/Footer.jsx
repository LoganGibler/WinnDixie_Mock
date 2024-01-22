import React, { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { SiAndroidauto } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Transition } from "@headlessui/react";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("");
  const [active, setActive] = useState(false);

  const handleFooterClick = (clickedSection) => {
    if (clickedSection === activeTab) {
      setActive(false);
      setActiveTab("");
    } else if (clickedSection === "") {
      setActive(false);
      setActiveTab("");
    } else {
      setActiveTab(clickedSection);
      setActive(true);
    }
  };

  return (
    <div className="flex flex-col pb-0 grow text-white">
      <div className="flex justify-center grow shadow1 py-3 bg-[#ebe9e9] text-black">
        <FaFacebookF className="mx-3 hover:cursor-pointer" />{" "}
        <BsInstagram className="mx-3 hover:cursor-pointer" />
        <FaTwitter className="mx-3 hover:cursor-pointer" />{" "}
        <FaPinterestP className="mx-3 hover:cursor-pointer" />
      </div>

      <div className="flex flex-col justify-center text-center mt-2 py-3 text-black">
        <p>Download the Winn-Dixie Mobile App:</p>
        <p className="flex justify-center mt-1 hover:cursor-pointer">
          <FaApple className="mt-1 mx-1" /> iPhone{" "}
          <SiAndroidauto className="mt-[5px] mr-1 ml-3" /> Android
        </p>
      </div>

      <div className="flex flex-col px-8 bg-[#c8102e] py-5 justify-center md:flex-wrap md:flex-row">
        <div className="flex flex-col">
          <div
            className="flex py-2.5 font-bold text-white hover:cursor-pointer md:w-[340px] md:mr-[2rem]"
            onClick={() =>
              activeTab === "Winn-Dixie"
                ? handleFooterClick("")
                : handleFooterClick("Winn-Dixie")
            }
          >
            Winn-Dixie
            <div className="flex grow justify-end">
              {activeTab === "Winn-Dixie" ? (
                <IoIosArrowUp className="text-2xl" />
              ) : (
                <IoIosArrowDown className="text-2xl" />
              )}
            </div>
          </div>

          {activeTab === "Winn-Dixie" ? (
            <Transition
              appear={true}
              show={active}
              enter="transition-all duration-800 ease-out"
              enterFrom="-mt-3 opacity-0 scale-y-0"
              enterTo="opacity-100 scale-y-100"
              leave="transition-all duration-800 ease-in"
              leaveTo="-mt-3 opacity-0 scale-y-0"
            >
              <div className="flex justify-center py-2">
                <div className="mx-4">
                  <p className="hover:cursor-pointer">Winn Win Twins</p>
                  <p className="hover:cursor-pointer">Rewards</p>
                  <p className="hover:cursor-pointer">Our brands</p>
                </div>
                <div className="mx-4">
                  <p className="hover:cursor-pointer">Shop online</p>
                  <p className="hover:cursor-pointer">Weekly Ad</p>
                  <p className="hover:cursor-pointer">Digital coupons</p>
                </div>
              </div>
            </Transition>
          ) : null}
        </div>

        <div className="flex flex-col">
          <div
            className="flex py-2.5 font-bold text-white hover:cursor-pointer md:w-[340px]"
            onClick={() =>
              activeTab === "About"
                ? handleFooterClick("")
                : handleFooterClick("About")
            }
          >
            About
            <div className="flex grow justify-end">
              {activeTab === "About" ? (
                <IoIosArrowUp className="text-2xl" />
              ) : (
                <IoIosArrowDown className="text-2xl" />
              )}
            </div>
          </div>
          {activeTab === "About" ? (
            <Transition
              appear={true}
              show={active}
              enter="transition-all duration-800 ease-out"
              enterFrom="-mt-3 opacity-0 scale-y-0"
              enterTo="opacity-100 scale-y-100"
              leave="transition-all duration-800 ease-in"
              leaveTo="-mt-3 opacity-0 scale-y-0"
            >
              <div className="flex justify-center  py-2">
                <div className="mx-4">
                  <p className="hover:cursor-pointer">About Winn-Dixie</p>
                  <p className="hover:cursor-pointer">Find a store</p>
                  <p className="hover:cursor-pointer">Community Involvement</p>
                  <p className="hover:cursor-pointer">Hurricane preparedness</p>
                </div>
                <div className="mx-4">
                  <p className="hover:cursor-pointer">Latest news</p>
                  <p className="hover:cursor-pointer">Press releases</p>
                  <p className="hover:cursor-pointer">Sustainability</p>
                  <p className="hover:cursor-pointer">Vendor resources</p>
                </div>
              </div>
            </Transition>
          ) : null}
        </div>

        <div className="flex flex-col">
          <div
            className="flex py-2.5 font-bold text-white hover:cursor-pointer md:w-[340px] md:mr-[2rem]"
            onClick={() =>
              activeTab === "Customer service"
                ? handleFooterClick("")
                : handleFooterClick("Customer service")
            }
          >
            Customer service
            <div className="flex grow justify-end">
              {activeTab === "Customer service" ? (
                <IoIosArrowUp className="text-2xl" />
              ) : (
                <IoIosArrowDown className="text-2xl" />
              )}
            </div>
          </div>
          {activeTab === "Customer service" ? (
            <Transition
              appear={true}
              show={active}
              enter="transition-all duration-800 ease-out"
              enterFrom="-mt-3 opacity-0 scale-y-0"
              enterTo="opacity-100 scale-y-100"
              leave="transition-all duration-800 ease-in"
              leaveTo="-mt-3 opacity-0 scale-y-0"
            >
              <div className="flex justify-center py-2">
                <div className="mx-4">
                  <p className="hover:cursor-pointer">FAQs</p>
                  <p className="hover:cursor-pointer">Contact us</p>
                </div>
                <div className="mx-4">
                  <p className="hover:cursor-pointer">Product recalls</p>
                  <p className="hover:cursor-pointer">Gift Cards</p>
                </div>
              </div>
            </Transition>
          ) : null}
        </div>

        <div className="flex flex-col">
          <div
            className="flex py-2.5 font-bold text-white hover:cursor-pointer md:w-[340px]"
            onClick={() =>
              activeTab === "Legal"
                ? handleFooterClick("")
                : handleFooterClick("Legal")
            }
          >
            Legal
            <div className="flex grow justify-end">
              {activeTab === "Legal" ? (
                <IoIosArrowUp className="text-2xl" />
              ) : (
                <IoIosArrowDown className="text-2xl" />
              )}
            </div>
          </div>
          {activeTab === "Legal" ? (
            <Transition
              appear={true}
              show={active}
              enter="transition-all duration-800 ease-out"
              enterFrom="-mt-3 opacity-0 scale-y-0"
              enterTo="opacity-100 scale-y-100"
              leave="transition-all duration-800 ease-in"
              leaveTo="-mt-3 opacity-0 scale-y-0"
            >
              <div className="flex justify-center py-2">
                <div className="mx-4 max-w-[140px]">
                  <p className="hover:cursor-pointer">
                    Accessibility statement
                  </p>
                  <p className="hover:cursor-pointer">Coupon Policy</p>
                  <p className="hover:cursor-pointer">DMCA Policy</p>
                  <p className="hover:cursor-pointer">Subpeona Requests</p>
                </div>
                <div className="mx-4 max-w-[140px]">
                  <p className="hover:cursor-pointer">Privacy policy</p>
                  <p className="hover:cursor-pointer">
                    Rewards terms and conditions
                  </p>
                  <p className="hover:cursor-pointer">Terms of use</p>
                </div>
              </div>
            </Transition>
          ) : null}
        </div>

        <div>
          <div
            className="flex py-2.5 font-bold text-white hover:cursor-pointer md:w-[340px] md:mr-[2rem]"
            onClick={() =>
              activeTab === "Corporate"
                ? handleFooterClick("")
                : handleFooterClick("Corporate")
            }
          >
            Corporate
            <div className="flex grow justify-end">
              {activeTab === "Corporate" ? (
                <IoIosArrowUp className="text-2xl" />
              ) : (
                <IoIosArrowDown className="text-2xl" />
              )}
            </div>
          </div>
          {activeTab === "Corporate" ? (
            <Transition
              appear={true}
              show={active}
              enter="transition-all duration-800 ease-out"
              enterFrom="-mt-3 opacity-0 scale-y-0"
              enterTo="opacity-100 scale-y-100"
              leave="transition-all duration-800 ease-in"
              leaveTo="-mt-3 opacity-0 scale-y-0"
            >
              <div className="flex justify-center py-2">
                <div className="mx-4 max-w-[150px]">
                  <p className="hover:cursor-pointer">
                    About Southeastern Grocers
                  </p>
                  <p className="hover:cursor-pointer">Advertise with us</p>
                </div>
                <div className="mx-4 max-w-[150px]">
                  <p className="hover:cursor-pointer">Business Credit Card</p>
                  <p className="hover:cursor-pointer">Careers </p>
                </div>
              </div>
            </Transition>
          ) : null}
        </div>

        <div className="hidden md:flex flex-col">
          <div
            className="flex py-2.5 font-bold text-[#c8102e] hover:cursor-pointer md:w-[340px]"
            // onClick={() =>
            //   activeTab === "Winn-Dixie"
            //     ? handleFooterClick("")
            //     : handleFooterClick("Winn-Dixie")
            // }
          >
            Winn-Dixie
            <div className="flex grow justify-end">
              {activeTab === "Winn-Dixie" ? (
                <IoIosArrowUp className="text-2xl" />
              ) : (
                <IoIosArrowDown className="text-2xl" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#a20f27] py-3 px-4 text-sm text-slate-200 text-center">
        <p>
          Neighborhood Stores in Florida, Georgia, Alabama, Louisiana, and
          Mississippi. Copyright 2024 Winn-Dixie Stores, Inc. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
