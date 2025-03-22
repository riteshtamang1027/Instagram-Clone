import React from "react";
import Profile_Nav from "../Mobilepages/Profile_Nav";
import Middle_Profile from "../Mobilepages/Middle_Profile";
import Discover_People from "../Mobilepages/Discover_People";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { ContactRound, Film } from "lucide-react";

export default function Mobile_Profile() {
  return (
    <div className="block sm:hidden space-y-6 w-11/12 mx-auto">
      {/* Navbar section */}
      <Profile_Nav />
      <Middle_Profile />
      <Discover_People />
      <div>
        <div className=" mt-6  ">
          <div className="flex items-center justify-between px-16">
            <RiLayoutGrid2Fill size={24} className="opacity-60" />
            <Film className="opacity-60" />
            <ContactRound className="opacity-60" />
          </div>

          <div className="grid grid-cols-2 gap-7  ">
            {Posts.map((item, index) => (
              <div
                key={index}
                className="w-36 h-50 cursor-pointer overflow-hidden py-2"
              >
                <img height={200} width={300} src={item.img} alt="Image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Posts = [
  {
    img: "https://images.unsplash.com/photo-1738494610263-4e27d9d4e201?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    img: "https://images.unsplash.com/photo-1738494610263-4e27d9d4e201?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  
];
