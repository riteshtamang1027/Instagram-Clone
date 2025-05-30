import React, { useEffect, useState } from "react";
import { Plus, Settings } from "lucide-react";
import Profile_Feed_Section from "./Profile_Feed_Section";
import { FaThreads } from "react-icons/fa6";
import Discover_People from "../Mobilepages/Discover_People";
import UserRegisterCard from "../components/userRegisterCard";
import axios from "axios";
import { useLocation } from "react-router";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import LoginCard from "../components/loginCard";

export default function Profile() {
  const [User, setUser] = useState();
  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  const fetchSingleUserId = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/users/${userId}`
      );
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
      console.log("Something went wrong to fetching single user", error);
    }
  };
  useEffect(() => {
    fetchSingleUserId();
  }, [userId]);

  return (
    <div className="  mt-12  ml-26 hidden md:block ">
      <div className="  mt-6 flex gap-x-24 items-center ">
        <div className=" w-max relative  rounded-full ml-40">
          <img
            className="rounded-full border border-gray-300 w-36 h-36 object-cover "
            width={1500}
            height={1500}
            src={User?.profilePicture}
            alt=""
          />

          <div className="h-10 w-20 bg-white border border-gray-200 shadow-2xl  absolute flex items-center justify-center   -top-8 left-8 rounded-lg">
            <p className=" text-xs  ">Note...</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex gap-2">
            <p className="font-semibold opacity-80 text-lg">
              {User?.fullName.toLowerCase().replace(/\s+/g, "")}
            </p>

            <button className="bg-gray-200 font-semibold text-sm opacity-80 px-4 ml-4 py-1 rounded-md hover:bg-gray-300 cursor-pointer duration-300 whitespace-nowrap">
              Edit profile
            </button>
            <button className="bg-gray-200 text-sm font-semibold opacity-80 px-4 py-1 rounded-md hover:bg-gray-300 cursor-pointer duration-300 whitespace-nowrap">
              View archive
            </button>
            <Popup
              contentStyle={{
                width: "26vw",
                borderRadius: "16px",
                overflow: "hidden",
              }}
              modal
              trigger={
                <Settings size={30} className="opacity-70 cursor-pointer" />
              }
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer  text-center border-gray-300 space-y-1.5 -mx-1 "
                >
                  <p className=" opacity-90 py-2.5 ">{item.p}</p>
                  {item.h}
                </div>
              ))}
            </Popup>
          </div>

          <div className="flex gap-12 font-bold opacity-70">
            <p>3 posts</p>
            <p>40 followers</p>
            <p>32 following</p>
          </div>

          <div className="space-y-1">
            <p className="font-semibold opacity-80">{User?.fullName}</p>
            <button className="bg-gray-200 text-black flex gap-1 text-xs font-semibold opacity-80 px-2 py-0.5 rounded-full hover:bg-gray-300 cursor-pointer duration-300 whitespace-nowrap">
              <FaThreads size={18} />{" "}
              {User?.fullName.toLowerCase().replace(/\s+/g, "")}
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
      <Discover_People />
      <div className="w-10/12 mx-auto mt-6">
        <hr className=" text-gray-300" />
        <Profile_Feed_Section />
      </div>

      <UserRegisterCard />
      <LoginCard/>
    </div>
  );
}

const items = [
  { p: "Apps and websites", h: <hr className="text-gray-300" /> },
  { p: "QR code", h: <hr className="text-gray-300" /> },
  { p: "Notifications", h: <hr className="text-gray-300" /> },
  { p: "Settings and privacy", h: <hr className="text-gray-300" /> },
  { p: "Meta Verified", h: <hr className="text-gray-300" /> },
  { p: "Supervision", h: <hr className="text-gray-300" /> },
  { p: "Login activity", h: <hr className="text-gray-300" /> },
  { p: "Logout", h: <hr className="text-gray-300" /> },
  { p: "Cancel" },
];
