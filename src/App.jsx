import React, { useState } from "react";
import "./App.css";
import { Navbar, Menu } from "./components";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex flex-col bg-[#f9f9f9]">
      <Navbar
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
      />

      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
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
