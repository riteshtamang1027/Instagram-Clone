import React from "react";
import image from "../../public/image/demonslayer.jpg";
import { FaThreads } from "react-icons/fa6";
import { UserRound } from "lucide-react";

export default function Middle_Profile() {
  return (
    <div className="space-y-4">
      <div className="flex">
        <div className="relative  rounded-full ">
          <img className="rounded-full " width={70} src={image} alt="" />

          <div className="h-7 w-14 bg-white border border-gray-200 shadow-2xl  absolute flex items-center justify-center    -top-2 left-2 rounded-lg">
            <p className=" text-xs   ">Note...</p>
          </div>
        </div>

        <div className="ml-4">
          <p className=" text-xs font-semibold opacity-70">Ritesh Tamang</p>
          <div className="flex gap-x-4">
            {Prop.map((item, index) => (
              <div key={index} className=" text-xs font-semibold opacity-70">
                <p>{item.Number}</p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="font-semibold text-sm opacity-75">it's me ritesh</p>
      <button className="bg-gray-200 text-black flex gap-1 text-xs font-semibold opacity-80 px-2 py-0.5 rounded-full hover:bg-gray-300 cursor-pointer duration-300 whitespace-nowrap">
        <FaThreads size={18} /> Username
      </button>

      <div className="flex gap-2  w-full ">
        <button className="bg-gray-200 font-semibold text-xs opacity-80 px-7  rounded-md hover:bg-gray-300 cursor-pointer duration-300 whitespace-nowrap">
          Edit profile
        </button>
        <button className="bg-gray-200 text-xs font-semibold opacity-80 px-7  rounded-md hover:bg-gray-300 cursor-pointer duration-300 whitespace-nowrap">
          Share Profile
        </button>
        <div className="bg-gray-200 p-0.5 rounded-full ">
          <UserRound size={22} className="opacity-70" />
        </div>
      </div>
    </div>
  );
}

const Prop = [
  {
    Number: 101,
    text: "posts",
  },
  {
    Number: 586,
    text: "followers",
  },
  {
    Number: 754,
    text: "following",
  },
];
