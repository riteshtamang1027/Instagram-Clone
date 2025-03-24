import { ChevronDown, SquarePen } from "lucide-react";
import React from "react";
import image from "../../public/images/tanjiro.jpg";

export default function Messages() {
  return (
    <div className="w-4/12 border-r border-gray-200 pt-12 h-screen px-4">
      <div className="flex items-center justify-between">
        <p className="flex items-center text-xl font-semibold gap-2">
          Username <ChevronDown className="opacity-70" size={20} />{" "}
        </p>
        <SquarePen />
      </div>

      <div className="relative  rounded-full ">
        <img
          className="rounded-full w-18 h-18 object-cover "
          width={1500}
          height={1500}
          src={image}
          alt=""
        />
        <div className="h-7 w-14 bg-white border border-gray-200 shadow-2xl  absolute flex items-center justify-center    -top-5 left-2 rounded-lg">
          <p className=" text-xs   ">Note...</p>
        </div>
      </div>
    </div>
  );
}
