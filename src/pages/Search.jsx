import React from "react";

export default function Search() {

  return (
    
      <div className="bg-gray-100 h-screen fixed top-0 left-64 w-[28vw] rounded-md">

        <p className="text-2xl font-semibold opacity-90">Search</p>
       
        <div>
          <input
            className="bg-white w-[24vw] px-4 py-2 outline-none border border-gray-300 rounded-md"
            type="search"
            placeholder="Search"
          />
        </div>

      </div>

    
  );
}
