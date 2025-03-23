import React, {  useState } from "react";
import {
  Bookmark,
  MessageSquareWarning,
  Settings,
  SquareActivity,
  Sun,
} from "lucide-react";
import Switch_Account from "./switch_account";

export default function More({ hidemore }) {
  const [isActive, setisActive] = useState(false);

  const [SwitchAccount, setSwitchAccount] = useState(false);
  const show = () =>{ 
    setSwitchAccount(true);
    setisActive(true);
  };
  const hidden = () => setSwitchAccount(false);


  return (
    <div>
      {
        isActive ?
        
       <div>{SwitchAccount && <Switch_Account hidden={hidden} />}</div>
       :
       <div>

       <div onClick={hidemore} className="fixed inset-0"></div>

       <div className="fixed space-y-1   w-max  border-b mx-8 border-b-gray-100 bottom-12 rounded-xl">
         <div className="w-64 h-max bg-white shadow-2xl   inset-shadow-sm rounded-t-xl px-2 py-4">
           {Icons.map((item, index) => (
             <div
               key={index}
               className="flex items-center gap-x-2 gap-y-4 hover:bg-gray-100 w-full rounded-md cursor-pointer p-3"
             >
               {item.icon}
               <p className=" font-semibold opacity-80">{item.Name}</p>
             </div>
           ))}
         </div>

         <div className="w-64 h-max bg-white shadow-2xl  rounded-b-xl px-2 py-4 space-y-4">
           <p
             onClick={show}
             className=" space-y-4 hover:bg-gray-100 w-full rounded-md cursor-pointer p-3"
           >
             Switch accounts
           </p>

           <hr className="text-gray-300" />
           <p className=" space-y-4 hover:bg-gray-200 w-full rounded-md cursor-pointer p-3">
             Log out
           </p>
         </div>
       </div>
     </div>
      }


      
    
      
     


      
    </div>
  );
}

const Icons = [
  {
    icon: <Settings size={20} />,
    Name: "Settings",
  },
  {
    icon: <SquareActivity size={20} />,
    Name: "Your activity",
  },
  {
    icon: <Bookmark size={20} />,
    Name: "Saved",
  },
  {
    icon: <Sun size={20} />,
    Name: "Switch appearance",
  },
  {
    icon: <MessageSquareWarning size={20} />,
    Name: "Report a problem",
  },
];
