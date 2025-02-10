import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Music,
  Send,
  Volume2,
} from "lucide-react";
import React from "react";
import Left_Side from "../components/Left_Side";

export default function Reels() {
  return (
    <div className="flex gap-x-96">
      <div className="sticky w-3/12 lg:w-2/12 hidden border-r border-gray-300 sm:block top-0 h-screen">
        <Left_Side />
      </div>
      <div>
        <div className=" flex items-end  ">
          <div className="w-[24vw] h-[90vh] mt-8 relative bg-gray-900 rounded-sm">
            <div className="w-max absolute top-2 bg-white border rounded-full p-4 opacity-30 right-2 ">
              {" "}
            </div>
            <Volume2 className=" absolute text-white right-3 top-3 " />

            <video
              autoPlay
              loop
              controls
              className="absolute top-48"
              src="https://cdn.pixabay.com/video/2019/10/18/28052-367411298_tiny.mp4"
            />

            <div className=" text-white absolute space-y-4  bottom-8 left-8">
              <div className="flex items-center gap-x-2   ">
                <img
                  className="w-[2.8vw] h-[6vh] object-cover rounded-full"
                  src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
                <p>
                  riteshlama_001 <span className="font-extrabold">.</span>
                </p>
                <button className="border border-gray-200 px-2 py-1 rounded-lg">
                  Follow
                </button>
              </div>
              <p>
                Lorem ipsum dolor sit amet...{" "}
                <span className="opacity-60">more</span>{" "}
              </p>

              <div className="flex items-center gap-2  rounded-full px-2 py-0.5 bg-gray-700 ">
                <Music size={16} strokeWidth={3} />
                <p className="font-semibold text-sm">Song name</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 ml-8 opacity-75">
            <div>
              <Heart className="cursor-pointer" />
              <p>123</p>
            </div>
            <div>
              <MessageCircle className="cursor-pointer" />
              <p>123</p>
            </div>
            <Send className="cursor-pointer" />
            <Bookmark className="cursor-pointer" />
            <MoreHorizontal className="cursor-pointer" />
            <div className="border hover:opacity-40 rounded-md">
              <img
                className="w-[2vw] h-[4vh] object-cover cursor-pointer rounded-md"
                src="https://images.unsplash.com/photo-1474447976065-67d23accb1e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D "
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
