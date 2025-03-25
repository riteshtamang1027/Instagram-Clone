import React,  { useEffect, useState } from "react";
import image from "../../public/images/tanjiro.jpg";
import axios from "axios";
import { ChevronDown, SquarePen } from "lucide-react";

export default function Messenger_LeftSide() {
    const [fetching, setFetching] = useState(false);

  const [Users, setUsers] = useState();
  const fetchAllUsers = async () => {
    try {
      setFetching(true);
      const response = await axios.get("http://localhost:5000/users");

      setUsers(response.data.user);
      setFetching(false);
    } catch (error) {
      console.log(error);
      console.log("Something went wrong.");
      setFetching(false);
    }
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <div className="">
     
    <div className="bg-white z-50 px-6 py-2 w-104 border-r  border-gray-200 top-0 fixed">
    <div className="flex items-center justify-between ">
       <p className="flex items-center text-xl font-semibold gap-2">
         Username <ChevronDown className="opacity-70" size={20} />{" "}
       </p>
       <SquarePen className="opacity-80 cursor-pointer" />
     </div>
     <div className="space-y-8 ">
       {fetching ? (
         <p>Loading...</p>
       ) : (
         <div className="flex mt-12 gap-x-8 ">
           <div className="relative  rounded-full ">
             <div className="text-center cursor-pointer space-y-1">
               <img
                 className="rounded-full w-20 h-20 object-cover "
                 width={1500}
                 height={1500}
                 src={image}
                 alt=""
               />
               <p className="text-sm opacity-80">{"Username".toLowerCase()}</p>
             </div>

             <div className="h-8 w-16 bg-white border border-gray-200 shadow-2xl  absolute flex items-center justify-center    -top-5 left-2 rounded-lg">
               <p className=" text-xs   ">Note...</p>
             </div>
           </div>

           <div className=" flex items-center gap-x-8 ">
             {Users?.slice(0, 2).map((item, index) => (
               <div key={index} className="relative  rounded-full ">
                 <div className="text-center space-y-1 cursor-pointer">
                   <img
                     className="rounded-full w-20 h-20 object-cover "
                     width={1500}
                     height={1500}
                     src={item.profilePicture}
                     alt="Image"
                   />
                   <p className="text-sm opacity-80">
                     {item.fullName
                       .toLowerCase()
                       .replace(" ", "")
                       .slice(0, 10, "") + "..."}{" "}
                   </p>
                 </div>

                 <div className="h-8 w-16 bg-white border border-gray-200 shadow-2xl  absolute flex items-center justify-center    -top-5 left-2 rounded-lg">
                   <p className=" text-xs   ">Note...</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
       )}

       <div className="flex justify-between ">
         <p className="font-bold opacity-90 ">Messages</p>
         <p className="font-semibold opacity-70 ">Requests</p>
       </div>

     </div>

    </div>

     <div className="space-y-4 mt-64 sticky h-screen w-104 hover:overflow-y-scroll inset-0 border-r border-gray-200">
         {fetching ? (
           Array(4)
             .fill()
             .map((_, index) => (
               <div
                 key={index}
                 className="flex items-center justify-between gap-x-4"
               >
                 <div className="flex">
                   <div className="h-16 w-16 bg-gray-300 rounded-full animate-pulse border-3 border-orange-700 p-0.5"></div>
                   <div>
                     <div className="space-y-1 bg-gray-100  rounded-sm p-2">
                       <div className="w-36 h-8 rounded-sm animate-pulse bg-gray-300"></div>
                       <div className="w-22 h-3 rounded-sm animate-pulse bg-gray-300"></div>
                     </div>
                   </div>
                 </div>
                 <div className="w-28 rounded-sm h-8 animate-pulse bg-gray-300"></div>
               </div>
             ))
         ) : (
           <div className="space-y-2  ">
             {Users?.map((item, index) => (
               <div key={index} className="flex px-6 py-2 tems-center hover:bg-gray-100 justify-between duration-300 cursor-pointer">
                 <div className="flex gap-x-2 ">
                   <img
                     height={1050}
                     className="rounded-full object-cover w-16 h-16 cursor-pointer"
                     width={1050}
                     src={item.profilePicture}
                     alt="Image"
                   />

                   <div>
                     <p className="font-semibold text-lg">{item.fullName}</p>
                     <p className="opacity-60">hello</p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         )}
       </div>

   </div>
  )
}
