import React, { useState } from "react";
import { BsArrowLeftShort, BsSearch, BsChevronDown } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { Link } from "@remix-run/react";
import { Menus } from "./menuData";

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);

  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 relative duration-300 ${
          isOpen ? "w-72" : "w-20"
        }`}
      >
        <BsArrowLeftShort
          className={`text-dark-purple bg-white text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
            !isOpen && "rotate-180"
          } `}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />

        <div className="">
          <img src="/everesteffect-logo.svg" alt="Logo" className={`text-5xl invert rounded cursor-pointer block float-left mr-2 mb-5 duration-500 ${
              isOpen && "rotate-[360deg]"
              }`} 
            /> 
        </div>

        <div
          className={`flex items-center rounded-md bg-light-white mt-6 ${
            !isOpen ? "px-2.5" : "px-4"
          } py-2`}
        >
          <BsSearch
            className={`text-white text-lg block float-left cursor-pointer ${
              isOpen && "mr-2"
            }`}
          />
          <input
            type={"search"}
            placeholder="Search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !isOpen && "hidden"
            }`}
          />
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
            <Link to={menu.links ? `${menu.links}` : ''}>
              <li
                key={index}
                className={`text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? <menu.icon /> : <RiDashboardFill /> }
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !isOpen && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && isOpen && (
                  <BsChevronDown
                    className={`${isSubmenuOpen && "rotate-180"}`}
                    onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                  />
                )}
              </li>
              </Link>

              {menu.submenu && isSubmenuOpen && isOpen && (
                <ul>
                  {menu.submenuItems?.map((submenuItem, index) => (
                    <li
                      key={index}
                      className={`text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md`}
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
