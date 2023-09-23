"use client";

// React Imports
import { useState } from "react";

// Package Imports
import classNames from "classnames";
import Navbar from "../navbar/components/Navbar";

// Component Imports
import NavbarItem from "../navbar/components/NavbarItem";

// Dummy Data Import
import navbarItemArr from "../navbar/dummyData/navbarItemArr.json";
import HamburgerMenuButton from "./components/HamburgerMenuButton";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuContainerClasses = classNames(
    "transition-height duration-300 ease-in-out absolute bg-dark p-4 right-0 top-4 text-white rounded-md hamburger-menu flex flex-col z-10",
    {
      "h-0": !isOpen,
      "h-auto w-52": isOpen,
    }
  );

  const closedHamburgerMenu = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative lg:hidden">
      <HamburgerMenuButton isOpen={isOpen} handleClick={handleClick} />
      {isOpen && (
        <div className={menuContainerClasses}>
          {navbarItemArr.map((item, index) => {
            return (
              <NavbarItem
                closedHamburgerMenu={closedHamburgerMenu}
                isHamburgerMenu
                key={index}
                item={item}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
