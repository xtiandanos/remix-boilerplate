import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { BsArrowLeftShort, BsSearch, BsChevronDown } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { Link } from "@remix-run/react";
import SideBar from "~/components/SideBar";

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);

  const Menus = [
    { title: "Dashboard" },
    { title: "Pages", links: '/customers' },
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

  return (
    <div className="flex">
      <SideBar />
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home</h1>
      </div>
    </div>
  );
}
