
import { BsPerson, BsFillImageFill, BsReverseBackspaceReverse } from "react-icons/bs";
import { AiOutlineBarChart, AiOutlineLogout, AiOutlineMail, AiOutlineSetting } from "react-icons/ai";

interface MenuItem {
  title: string;
  links?: string;
  icon?: React.ComponentType;
  submenu?: boolean;
  submenuItems?: MenuItem[];
  spacing?: boolean;
  handleLogout?: () => void;
}

export const Menus: MenuItem[] = [
  { title: "Dashboard", links: '/dashboard'},
  { title: "Customers", links: '/customers', icon: BsPerson },
  { title: "Media", spacing: true, icon: BsFillImageFill },
  {
    title: "Projects",
    icon: BsReverseBackspaceReverse,
    submenu: true,
    submenuItems: [
      { title: "Submenu 1" },
      { title: "Submenu 2" },
      { title: "Submenu 3" },
    ],
  },
  { title: "Analytics", icon: AiOutlineBarChart },
  { title: "Inbox", icon: AiOutlineMail },
  { title: "Profile", spacing: true, icon: BsPerson },
  { title: "Setting", icon: AiOutlineSetting },
  { title: "Logout", icon: AiOutlineLogout },
];
