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

export default function Left_Side() {
  return (
    <div className="bg-gray-50 shadow-xl px-4 ">
      <p>Instagram</p>
      <div className="flex flex-col justify-between h-[96vh]">
        <div>
          {Links1.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-x-2 py-2 font-semibold hover:bg-gray-200 px-2 rounded-md cursor-pointer opacity-80"
            >
              {item.icon}
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div>
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
    title: "Home",
  },
  {
    icon: <Search />,
    title: "Search",
  },
  {
    icon: <Compass />,
    title: "Explores",
  },
  {
    icon: <Film />,
    title: "Reels",
  },
  {
    icon: <MessageCircleMore />,
    title: "Messages",
  },
  {
    icon: <Bell />,
    title: "Home",
  },
  {
    icon: <SquarePlus />,
    title: "Create",
  },
  {
    icon: <User />,
    title: "Profile",
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
