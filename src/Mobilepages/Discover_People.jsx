import { X } from "lucide-react";
import React from "react";

export default function Discover_People() {
  return (
    <div className="space-y-4 mt-12">
      <div className="text-xs font-semibold flex items-center justify-between ">
        <p className="opacity-70">Discover people</p>
        <p className="text-blue-600">See All</p>
      </div>
      
        <div className="flex gap-2 overflow-x-scroll ">
          {Follow.map((item, index) => (
            <div
              key={index}
              className="relative w-36 h-48 bg-gray-200 rounded-md"
            >
              <X size={16} className="absolute  text-gray-600 top-1 right-1" />
              <div className="absolute flex flex-col items-center top-8 gap-y-2">
                <img
                  className="w-16 h-16 object-cover rounded-full"
                  src={item.profile}
                  alt=""
                />
                <div className="text-center ml-2">
                  <p className="text-xs opacity-70">{item.Name}</p>
                  <p className="text-xs opacity-70">
                    Followed by <span>{item.Followedby}</span>{" "}
                  </p>
                </div>

                <button className="bg-sky-500 text-xs text-white font-semibold px-6 py-1 mt-4 rounded-md">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
   
  );
}

const Follow = [
  {
    profile:
      "https://images.unsplash.com/photo-1542685295-b280fd4d2c59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Name: "Ritesh Tamang",
    Followedby: "someone1",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Name: " Sharamma Magar",
    Followedby: "someone12",
  },
  
  {
    profile:
      "https://images.unsplash.com/photo-1587723958656-ee042cc565a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Name: "Maw Maw",
    Followedby: "someone12",
  },
];
