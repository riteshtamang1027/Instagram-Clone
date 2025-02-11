import React from "react";
import image from "../../public/image/demonslayer.jpg";
import Left_Side from "../components/Left_Side";
import { Plus, Settings } from "lucide-react";
import Profile_Feed_Section from "./Profile_Feed_Section";
import { FaThreads } from "react-icons/fa6";

export default function Profile() {
  return (
    <div>
      <div className=" overflow-y-auto top-0  h-screen w-9/12 mx-auto ">
        <div className="  mt-6 flex gap-x-24 items-center ">
          <div className=" w-max relative  rounded-full ml-40">
            <img className="rounded-full " width={150} src={image} alt="" />

            <div className="h-10 w-20 bg-white border border-gray-200 shadow-2xl  absolute flex items-center justify-center   -top-8 left-8 rounded-lg">
              <p className=" text-xs  ">Note...</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-2">
              <p className="font-semibold opacity-80 text-lg">Username</p>
              <button className="bg-gray-200 font-semibold text-sm opacity-80 px-4 ml-4 py-1 rounded-md hover:bg-gray-300 cursor-pointer duration-300 whitespace-nowrap">
                Edit profile
              </button>
              <button className="bg-gray-200 text-sm font-semibold opacity-80 px-4 py-1 rounded-md hover:bg-gray-300 cursor-pointer duration-300 whitespace-nowrap">
                View archive
              </button>
              <Settings size={30} className="opacity-70" />
            </div>

            <div className="flex gap-12 font-bold opacity-70">
              <p>3 posts</p>
              <p>40 followers</p>
              <p>32 following</p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold opacity-80">Full Name</p>
              <button className="bg-gray-200 text-black flex gap-1 text-xs font-semibold opacity-80 px-2 py-0.5 rounded-full hover:bg-gray-300 cursor-pointer duration-300 whitespace-nowrap">
              <FaThreads size={18} /> Username
              </button>
              <p className="font-semibold opacity-75">
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
        </div>

        <div className="ml-36 mt-8   w-max text-center space-y-1  ">
          <div className=" w-max border-2 border-gray-200 rounded-full p-0.5 ">
            <Plus
              className="bg-gray-100 rounded-full text-gray-300 "
              size={70}
              strokeWidth={1}
            />
          </div>
          <p className="font-semibold text-sm opacity-70">New</p>
        </div>
        <div className="w-10/12 mx-auto mt-24">
          <hr className=" text-gray-300" />
          <Profile_Feed_Section />
        </div>
      </div>
    </div>
  );
}
