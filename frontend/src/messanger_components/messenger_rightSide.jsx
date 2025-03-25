import React from "react";
import { RiMessengerLine } from "react-icons/ri";

export default function Messenger_RightSide() {
    return (

        <div className="flex flex-col items-center justify-center mt-50 gap-y-6" >
        <div className="border rounded-full w-max p-4 ">
        <RiMessengerLine size={58} strokeWidth={0.05} className="opacity-85" />
        </div>
       <div className="text-center">
       <p className="text-lg opacity-90">Your messages</p>
       <p className="text-sm font-semibold opacity-70">Send a message to start a chat.</p>
       </div>
        <button className="px-4 py-1 bg-sky-500 text-white rounded-lg font-semibold text-sm cursor-pointer hover:bg-blue-500">Send message</button>
        </div>
    )
  
}
