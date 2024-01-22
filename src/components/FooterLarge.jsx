import React, { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { SiAndroidauto } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
// red: bg-[#c8102e]
// gray: bg-[#ebe9e9]
const FooterLarge = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="hidden flex-col lg:flex justify-center">
      <div className="shadow1 grow">
        <div className="flex justify-center ">
          <div className="flex bg-[#ebe9e9] justify-center px-5 py-2 rounded-br-full grow">
            Connect with us:
            <FaFacebookF className="text-lg hover:cursor-pointer ml-2 mr-2 mt-0.5 text-black" />
            <FaInstagram className="text-lg hover:cursor-pointer ml-2 mr-2 mt-0.5 text-black" />
            <FaTwitter className="text-lg hover:cursor-pointer ml-2 mr-2 mt-0.5 text-black" />
            <FaPinterestP className="text-lg hover:cursor-pointer ml-2 mr-2 mt-0.5 text-black" />
          </div>

          <div className="flex justify-center px-5 grow">
            <p className="flex mt-2">
              Download the Winn-Dixie Mobile App:{" "}
              <FaApple className="text-xl mt-[0px] mr-1 ml-3 hover:cursor-pointer" />{" "}
              iPhone{" "}
              <SiAndroidauto className="text-lg mt-[2px] ml-3 mr-1 hover:cursor-pointer" />{" "}
              Android
            </p>
          </div>
          <div className="flex grow justify-end pr-3">
            <p
              className="flex mt-[7px] hover:cursor-pointer"
              onClick={handleScrollToTop}
            >
              Back to Top <IoIosArrowUp className="text-xl mt-[0px] ml-1" />
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#c8102e] grow pt-5 px-6 pb-5">
        <div className="flex justify-evenly">
          <div className="flex flex-col">
            <h1 className="font-bold text-white text-base">Winn-Dixie</h1>
            <div className="text-slate-300 max-w-[190px] text-[15px]">
              <p className="py-1 mt-2 hover:cursor-pointer hover:text-slate-100">
                Winn Win Twinns
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Rewards
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Our Brands
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Shop Online
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Weekly Ad
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Digital coupons
              </p>
            </div>
          </div>
          <div className="flex flex-col px-6">
            <h1 className="font-bold text-white text-base">About</h1>
            <div className="text-slate-300 max-w-[190px] text-[15px]">
              <p className="py-1 mt-2 hover:cursor-pointer hover:text-slate-100">
                About Winn Dixie
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Find a store
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Community Involvement
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Hurricane preparedness
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Latest News
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Press releases
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Sustainability
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Vendor resources
              </p>
            </div>
          </div>
          <div className="flex flex-col px-6">
            <h1 className="font-bold text-white text-base">Customer service</h1>
            <div className="text-slate-300 max-w-[190px] text-[15px]">
              <p className="py-1 mt-2 hover:cursor-pointer hover:text-slate-100">
                FAQs
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Contact us
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Product recalls
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Gift Cards
              </p>
            </div>
          </div>
          <div className="flex flex-col px-6">
            <h1 className="font-bold text-white text-base">Legal</h1>
            <div className="text-slate-300 max-w-[190px] text-[15px]">
              <p className="py-1 mt-2 hover:cursor-pointer hover:text-slate-100">
                Accessibilty Statement
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Coupon policy
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                DMCA Policy
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Subpoena Requests
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Privacy policy
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Rewards terms and conditions
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Terms of Use
              </p>
            </div>
          </div>
          <div className="flex flex-col px-6">
            <h1 className="font-bold text-white text-base">Corporate</h1>
            <div className="text-slate-300 max-w-[180px] text-[15px]">
              <p className="py-1 mt-2 hover:cursor-pointer hover:text-slate-100">
                About Southeastern Grocers
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Advertise with us
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Business Credit Card
              </p>
              <p className="py-1 hover:cursor-pointer hover:text-slate-100">
                Careers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#a20f27] border-none py-3 px-4 text-sm text-slate-200 text-center">
        <p>
          Neighborhood Stores in Florida, Georgia, Alabama, Louisiana, and
          Mississippi. Copyright 2024 Winn-Dixie Stores, Inc. All Rights
          Reserved.
        </p>
        <p className="pt-2">Mock created by Logan Gibler</p>
      </div>
    </div>
  );
};

export default FooterLarge;
