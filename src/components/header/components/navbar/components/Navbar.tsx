// Dummy Data Import
import navbarItemArr from "../dummyData/navbarItemArr.json";

// Component Imports
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className=" gap-4 hidden lg:flex">
      {navbarItemArr.map((item, index) => {
        return <NavbarItem key={index} item={item} />;
      })}
    </div>
  );
};

export default Navbar;
