import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { BsArrowLeftShort, BsSearch, BsChevronDown } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { useOutletContext } from "@remix-run/react";
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "database.types";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);
  const { supabase } = useOutletContext<{
    supabase: SupabaseClient<Database>;
  }>();

  const Menus = [
    { title: "Dashboard" },
    { title: "Pages" },
    { title: "Media", spacing: true },
    {
      title: "Projects",
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Analytics" },
    { title: "Inbox" },
    { title: "Profile", spacing: true },
    { title: "Setting" },
    { title: "Logout" },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

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
        <div className="inline-flex">
          <AiFillEnvironment
            className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              isOpen && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl ${
              !isOpen && "scale-0"
            } duration-300`}
          >
            Tailwind
          </h1>
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
              <li
                key={index}
                className={`text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
                onClick={menu.title === "Logout" ? handleLogout : () => {}}
              >
                <span className="text-2xl block float-left">
                  <RiDashboardFill />
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

              {menu.submenu && isSubmenuOpen && isOpen && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
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
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
}
