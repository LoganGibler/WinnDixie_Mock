import React, { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { SiAndroidauto } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("");
  return (
    <div className="flex flex-col pb-5 grow">
      <div className="flex justify-center grow shadow1 py-3 bg-[#ebe9e9]">
        <FaFacebookF className="mx-3" /> <BsInstagram className="mx-3" />
        <FaTwitter className="mx-3" /> <FaPinterestP className="mx-3" />
      </div>

      <div className="flex flex-col justify-center text-center mt-2">
        <p>Download the Winn-Dixie Mobile App:</p>
        <p className="flex justify-center mt-1 hover:cursor-pointer">
          <FaApple className="mt-1 mx-1" /> iPhone{" "}
          <SiAndroidauto className="mt-[5px] mr-1 ml-3" /> Android
        </p>
      </div>

      <div className="px-8 bg-[#c8102e] py-5">
        <div
          className="flex py-2.5 font-bold text-white hover:cursor-pointer"
          onClick={() => setActiveTab("Winn-Dixie")}
        >
          Winn-Dixie
          <div className="flex grow justify-end">
            <IoIosArrowDown className="text-2xl" />
          </div>
        </div>
        {activeTab === "Winn-Dixie" ? <></> : null}
        <div
          className="flex py-2.5 font-bold text-white hover:cursor-pointer"
          onClick={() => setActiveTab("About")}
        >
          About
          <div className="flex grow justify-end">
            <IoIosArrowDown className="text-2xl" />
          </div>
        </div>
        {activeTab === "Winn-Dixie" ? <></> : null}
        <div
          className="flex py-2.5 font-bold text-white hover:cursor-pointer"
          onClick={() => setActiveTab("Customer service")}
        >
          Customer service
          <div className="flex grow justify-end">
            <IoIosArrowDown className="text-2xl" />
          </div>
        </div>
        {activeTab === "Winn-Dixie" ? <></> : null}
        <div
          className="flex py-2.5 font-bold text-white hover:cursor-pointer"
          onClick={() => setActiveTab("Customer service")}
        >
          Legal
          <div className="flex grow justify-end">
            <IoIosArrowDown className="text-2xl" />
          </div>
        </div>
        {activeTab === "Winn-Dixie" ? <></> : null}
        <div className="flex py-2.5 font-bold text-white hover:cursor-pointer">
          Corporate
          <div className="flex grow justify-end">
            <IoIosArrowDown className="text-2xl" />
          </div>
        </div>
        {activeTab === "Winn-Dixie" ? <></> : null}
      </div>
    </div>
  );
};

export default Footer;
