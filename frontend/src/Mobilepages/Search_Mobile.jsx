import { Search } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

export default function Search_Mobile() {
  return (
    <div className="mt-2 space-y-4 p-0.5 block sm:hidden">
      <div className="relative w-max px-6 ">
        <input
          type="text"
          className="w-96 border border-gray-300 font-semibold opacity-60 rounded-md outline-none px-8 py-1"
        />
        <Search
          className="absolute  top-2 left-7 cursor-pointer opacity-60 "
          size={20}
        />
      </div>
      <div className="grid grid-cols-3 gap-y-1 w-[100vw]">

        {Videos.map((video,index)=>(
 <div key={index} className="relative border bg-black  w-max">
<NavLink to={"/reels"}>
<video
   controls
   className="w-35 h-50 "
   src={video.item}
 ></video></NavLink>
</div>

        ))}
       
      </div>
    </div>
  );
}
const Videos = [
  { item: "https://v.ftcdn.net/09/31/24/05/700_F_931240586_usnkdrsyEzIMos05r5YDAzFBQtcwyApp_ST.mp4" },
  { item: "https://static.videezy.com/system/resources/previews/000/044/249/original/01__2822_29.mp4" },
  { item: "https://v.ftcdn.net/07/14/75/85/700_F_714758542_bcIrLUuIRzHC6PfrEe4hSgQh2WmBxNXE_ST.mp4" },
  { item: "https://static.videezy.com/system/resources/previews/000/040/982/original/alb_dgraf011_1080p.mp4" },
  { item: "https://static.videezy.com/system/resources/previews/000/008/452/original/Dark_Haired_Girl_Pensive_Looks_at_Camera.mp4" },
  { item: "https://static.videezy.com/system/resources/previews/000/000/168/original/Record.mp4" },
  { item: "https://static.videezy.com/system/resources/previews/000/021/920/original/beautiful-earth-hd-closeup.mp4" },
  { item: "https://static.videezy.com/system/resources/previews/000/008/220/original/Triangles_01.mp4" },
  { item: "https://static.videezy.com/system/resources/previews/000/037/868/original/White_15.2019.mp4" },
 
];
