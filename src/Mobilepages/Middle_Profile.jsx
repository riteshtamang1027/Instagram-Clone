import React from "react";
import image from "../../public/image/demonslayer.jpg";
import { FaThreads } from "react-icons/fa6";

export default function Middle_Profile() {
  return (
    <div className="space-y-2 px-4">
      <div className=" w-max relative  rounded-full ">
        <img className="rounded-full " width={70} src={image} alt="" />

        <div className="h-7 w-14 bg-white border border-gray-200 shadow-2xl  absolute flex items-center justify-center    -top-2 left-2 rounded-lg">
          <p className=" text-xs   ">Note...</p>
        </div>
      </div>
      <p className="font-semibold opacity-75">it's me ritesh</p>
      <button className="bg-gray-200 text-black flex gap-1 text-xs font-semibold opacity-80 px-2 py-0.5 rounded-full hover:bg-gray-300 cursor-pointer duration-300 whitespace-nowrap">
        <FaThreads size={18} /> Username
      </button>
    </div>
  );
}
