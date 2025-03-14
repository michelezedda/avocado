import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarToggler = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Mobile */}
      <div className="flex lg:hidden">
        <span
          className="cursor-pointer text-amber-950"
          onClick={sidebarToggler}
        >
          {isSidebarOpen ? (
            <IoCloseSharp className="size-8" />
          ) : (
            <GiHamburgerMenu className="size-7" />
          )}
        </span>
        {isSidebarOpen && (
          <ul className="absolute top-17 left-0 flex flex-col gap-2 bg-white h-full p-8 shadow-md shadow-gray-200">
            <li className="hover:font-semibold hover:text-amber-950 duration-100 cursor-pointer">
              APPETIZERS
            </li>
            <li className="hover:font-semibold hover:text-amber-950 duration-100 cursor-pointer">
              MAIN COURSES
            </li>
            <li className="hover:font-semibold hover:text-amber-950 duration-100 cursor-pointer">
              SIDE DISHES
            </li>
            <li className="hover:font-semibold hover:text-amber-950 duration-100 cursor-pointer">
              FINGER FOOD
            </li>
            <li className="hover:font-semibold hover:text-amber-950 duration-100 cursor-pointer">
              SNACKS
            </li>
            <li className="hover:font-semibold hover:text-amber-950 duration-100 cursor-pointer">
              SALADS
            </li>
            <li className="hover:font-semibold hover:text-amber-950 duration-100 cursor-pointer">
              DESSERTS
            </li>
            <li className="hover:font-semibold hover:text-amber-950 duration-100 cursor-pointer">
              BEVERAGES
            </li>
          </ul>
        )}
      </div>
      {/* Desktop */}
      <div className="hidden lg:flex">
        <ul className="flex">
          <li>APPETIZERS</li>
          <li>MAIN COURSES</li>
          <li>SIDE DISHES</li>
          <li>FINGER FOOD</li>
          <li>SNACKS</li>
          <li>SALADS</li>
          <li>DESSERTS</li>
          <li>BEVERAGES</li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
