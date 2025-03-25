
import React from "react"
import Messenger_RightSide from "../messanger_components/messenger_rightSide";
import Messenger_LeftSide from "../messanger_components/messenger_leftSide";

export default function Messages() {
  

  return (

   <div className="flex items-center justify-between">

    <div className="w-4/12 ">
    <Messenger_LeftSide/>

    </div>
  
<div className="h-screen w-8/12 sticky inset-0 overflow-y-hidden">
<Messenger_RightSide/>


</div>


   </div>

  );
}
