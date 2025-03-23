import { X } from "lucide-react";
import React from "react";
import myimage from "../../public/instagram.png";

export default function Switch_Account({ hidden }) {
  return (
    <div>
      
   <div onClick={hidden} className="bg-black opacity-60 fixed inset-0 h-screen w-full"></div>

      <div className="w-4/12 mx-auto">
        <div className=" fixed top-16 w-100 h-116 rounded-lg space-y-4 px-12 bg-gray-50 border border-gray-100 ">
          <X
            onClick={hidden}
            size={24}
            className=" absolute  right-1 top-1 cursor-pointer"
          />
          <div className="px-6 mt-24 space-y-8  ">
            <img
              src={myimage}
              width={1000}
              height={1000}
              className="w-44 rounded-lg mx-10 "
              alt=""
            />

            <div className="flex flex-col space-y-6">
              <div className="space-y-2 flex flex-col">
                <input
                  type="text"
                  className="border border-gray-400 outline-none rounded-sm bg-gray-100 px-2 py-3 text-xs"
                  placeholder="Phone number, username or email"
                />

                <input
                  type="text"
                  className="border border-gray-400 outline-none rounded-sm bg-gray-100 px-2 py-3 text-xs"
                  placeholder="password"
                />
              </div>

              <div className="flex gap-2 ">
                <input type="checkbox" className="w-4" />
                <p className="text-xs">Save login info</p>
              </div>

              <button className="bg-sky-400 cursor-pointer  text-white  font-semibold rounded-lg px-4 py-1">
                Log in
              </button>

              <p className="opacity-80 text-sm text-center cursor-pointer">
                Forgot password?
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
