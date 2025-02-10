import {
  AtSign,
  Bell,
  Compass,
  Film,
  House,
  Menu,
  MessageCircleMore,
  Search,
  SquarePlus,
  User,
} from "lucide-react";
import React from "react";
import instagram from "../../public/instagram.png";
import { NavLink } from "react-router";

export default function Left_Side() {
  return (
    <div className="bg-gray-50 shadow-xl px-8 pt-10  ">
      <img className=" h-[6vh] object-cover" src={instagram} alt="Image" />
      <div className="flex flex-col justify-between h-[84vh] mt-8 ">
        <div className="space-y-2">
          {Links1.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="flex items-center gap-x-2 py-2 font-semibold hover:bg-gray-200 px-2 rounded-md cursor-pointer opacity-80"
            >
              {item.icon}
              <p>{item.title}</p>
            </NavLink>
          ))}
        </div>
        <div className="space-y-4">
          {Links2.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-x-2 py-2 font-semibold hover:bg-gray-200 px-2 rounded-md cursor-pointer opacity-80"
            >
              {item.icon}
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Links1 = [
  {
    icon: <House />,
    path: "/",
    title: "Home",
  },
  {
    icon: <Search />,
    title: "Search",
    path: "/",
  },
  {
    icon: <Compass />,
    title: "Explores",
    path: "/explore",
  },
  {
    icon: <Film />,
    title: "Reels",
    path: "/reels",
  },
  {
    icon: <MessageCircleMore />,
    title: "Messages",
    path: "/messages",
  },
  {
    icon: <Bell />,
    title: "Notefication",
    path: "/notification",
  },
  {
    icon: <SquarePlus />,
    title: "Create",
    path: "/creat",
  },
  {
    icon: <User />,
    title: "Profile",
    path: "/profile",
  },
];

const Links2 = [
  {
    icon: <AtSign />,
    title: "threats",
  },
  {
    icon: <Menu />,
    title: "More",
  },
];
