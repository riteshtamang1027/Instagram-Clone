import { X } from "lucide-react";
import React from "react";
import { FaPhotoFilm } from "react-icons/fa6";

export default function Creat({hidden3}) {
  return (
   <div>
    <div  className="bg-black opacity-50 w-full h-screen fixed inset-0">
      
    </div>
    <X onClick={hidden3} size={28} className=" absolute top-2 right-2 cursor-pointer text-white"/>
    <div className="w-4/12 mx-auto mt-30 left-24 fixed inset-0">
      <div className="w-124 h-124 rounded-lg  text-center space-y-4 bg-gray-50 border border-gray-100">
        <p className="font-semibold opacity-80 mt-4">Create new post </p>
        <hr className="text-gray-400" />

        <div className="space-y-4 ">
          <FaPhotoFilm size={80} className="ml-48 mt-32" />
          <p className="text-xl">Drag photos and videos here</p>
          <button className="bg-blue-500 cursor-pointer text-white  font-semibold rounded-lg px-4 py-1">
            Select from computer
          </button>
        </div>
      </div>
    </div>
   </div>
  );
}
