"use client";
// React Imports
import { FC } from "react";

// Package Imports
import Link from "next/link";

// Package Imports
import classNames from "classnames";
interface NavbarItemProps {
  item: {
    id: number;
    name: string;
    url: string;
  };
  isHamburgerMenu?: boolean;
  closedHamburgerMenu?: () => void;
}

const NavbarItem: FC<NavbarItemProps> = ({
  item,
  isHamburgerMenu,
  closedHamburgerMenu,
}) => {
  const { url, name } = item;

  const navbarItemClasses = classNames({
    "border-b border-b-secondary py-2": isHamburgerMenu,
    "bg-dark text-white rounded-2xl p-4 hover:bg-opacity-80": !isHamburgerMenu,
  });

  return (
    <Link
      className={navbarItemClasses}
      href={url}
      onClick={() => {
        if (isHamburgerMenu && closedHamburgerMenu) {
          closedHamburgerMenu();
        }
      }}
    >
      {name}
    </Link>
  );
};

export default NavbarItem;
