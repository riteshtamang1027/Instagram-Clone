import { Film, House, Search, SquarePlus, User } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

export default function Mobile_Menu() {
  return (
    <div className="fixed bottom-0 block sm:hidden w-full bg-gray-100 p-4  border-t border-gray-300">
      <div className="flex items-center justify-between ">
        <NavLink to={"/"}>
          <House />
        </NavLink>
        <NavLink to={"/"}>
          <Search />
        </NavLink>
        <NavLink to={"/creat"}>
          <SquarePlus />
        </NavLink>

        <NavLink to={"/reels"}>
          <Film />
        </NavLink>

        <NavLink to={"/Me"}>
          <User />
        </NavLink>
      </div>
    </div>
  );
}
