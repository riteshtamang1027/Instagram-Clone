import React from "react";
import { Search } from "lucide-react";

export default function Search_Section({hidden}) {
  return (
    <div>
      <div className="fixed bg-black inset-0 opacity-30" onClick={hidden}></div>
      <div className="bg-gray-100 h-screen fixed top-0 left-64 w-[28vw] p-4 rounded-md space-y-8">
        <p className="text-2xl font-semibold opacity-90  ">Search</p>

        <div className="relative  w-max">
          <input
            className="bg-white w-[24vw] px-8 py-2 outline-none border border-gray-300 rounded-md "
            type="search"
            placeholder="Search"
          />
          <Search className="absolute opacity-60 top-3 left-2 cursor-pointer " size={20} />
        </div>
        <hr className="text-gray-300" />
        <div>
          <p className="text-lg font-semibold opacity-80 ">Recent</p>
          <p className="opacity-60 text-center mt-60 ">No recent searches.</p>
        </div>
      </div>
    </div>
  );
}
