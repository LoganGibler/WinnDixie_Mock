import React, { useState } from "react";
import "./App.css";
import { Navbar, Menu, MobileSubMenu, Banner, Deals } from "./components";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileSubOptionTitle, setMobileSubOptionTitle] = useState("");
  const [subOptions, setSubOptions] = useState([]);
  const [mobileSubMenuActive, setMobileSubMenuActive] = useState(false);

  return (
    <div className="flex flex-col bg-[#f9f9f9]">
      <Navbar
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
      />

      <Menu
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        mobileSubOptionTitle={mobileSubOptionTitle}
        setMobileSubOptionTitle={setMobileSubOptionTitle}
        subOptions={subOptions}
        setSubOptions={setSubOptions}
        mobileSubMenuActive={mobileSubMenuActive}
        setMobileSubMenuActive={setMobileSubMenuActive}
      />
      <MobileSubMenu
        mobileSubOptionsTitle={mobileSubOptionTitle}
        subOptions={subOptions}
        mobileSubMenuActive={mobileSubMenuActive}
        setMobileSubMenuActive={setMobileSubMenuActive}
      />
      <Banner />
      <Deals />
      {menuActive || showDropdown ? (
        <div
          className="overlay1"
          onClick={(e) => {
            setMenuActive(false);
            setShowDropdown(false);
          }}
        ></div>
      ) : null}
    </div>
  );
}

export default App;
