import React from "react";

// Component Imports
import Logo from "./logo/Logo";
import Navbar from "./navbar/components/Navbar";
import HamburgerMenu from "./hamburger-menu/HamburgerMenu";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-5 md:container mt-14">
      <Logo />
      <Navbar />
      <HamburgerMenu />
    </div>
  );
};

export default Header;
