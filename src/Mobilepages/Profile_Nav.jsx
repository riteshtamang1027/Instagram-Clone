import React from 'react';
import { ChevronDown, Menu, SquarePlus } from "lucide-react";
import { FaThreads } from "react-icons/fa6";

export default function Profile_Nav() {
  return (
    <div>
       <div className="flex items-center justify-between p-2 opacity-85  w-[100vw]">
        <div className="flex items-center gap-0.5 ">
          <p className=" font-bold">username1028</p>
          <ChevronDown size={20} />
        </div>
        <div className="flex gap-4">
        <FaThreads size={24} />
        <SquarePlus size={22}/>
        <Menu size={22}/>
        </div>
       
      </div>
    </div>
  )
}
