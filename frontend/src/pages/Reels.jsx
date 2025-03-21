import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Bookmark, Camera, ChevronDown, Heart,  MessageCircle, MoreHorizontal, Music, Music2, Send } from 'lucide-react';
export default function Reels() {

  const [Reels, setReels] = useState();

  const fetchAllReels = async()=>{
    try {
      const response =await axios.get("http://localhost:5000/Reels");
      setReels(response.data.Reel)
      console.log(response.data.Reel)


    } catch (error) {
      console.log("Something went wrong to feth reels.",error)
      
    }
  }

  useEffect(()=>{
    fetchAllReels();

  },[])



  return (
    <div className=' space-y-12 sm:mt-8 md:ml-98'>
        
        {Reels?.map((item,index)=>(
           <div key={index} className="md:w-[28vw] md:h-[92vh] w-[100vw] h-screen  sm:rounded-md relative bg-black overflow-hidden">

       <div className='absolute text-white z-50 flex items-center justify-between py-2 w-full px-4 '>


             <div className='flex items-center gap-1'>
               <p className='text-xl font-bold'>Reels</p>
               <ChevronDown size={30}/>

             </div>
             <Camera size={30}/>
           </div>

           <video
             autoPlay={true}
             muted={true}
             controls={true}
             className="absolute w-full "
             src={item.video}
           />


         <div className='absolute bottom-12 text-white flex p-4  w-full justify-between items-end'>
          
              < div className=" text-white  space-y-4   ">
             
             <div className="flex items-center gap-x-4   ">
               <img
                 className="w-12 h-12 object-cover rounded-full"
                 src={item.profilePicture}
                 alt="Image"
               />
               <div>
               <p className='text-sm'>
                {item.userName} <span className="font-extrabold">.</span>
               </p>
               
               <p className='text-xs flex gap-2'><Music size={16} strokeWidth={3} />This is the best music forever</p>
               </div>
              
               <button className="border border-gray-200 px-2 py-1 rounded-lg">
                 Follow
               </button>
             </div>

             <p className='text-sm'>
              {item.caption}
               <span className="opacity-60">more</span>{" "}
             </p>
           </div>
           <div className='space-y-6'>
           <Heart className="cursor-pointer" />
           <MessageCircle className="cursor-pointer" />
           <Send className="cursor-pointer" />
           <Bookmark className="cursor-pointer" />
           <MoreHorizontal className="cursor-pointer" />
           <Music2/>

           </div>
         </div>

         </div>


      ))}

    </div>
  )
}

// const Reel=[
//   {
//     video:"https://videos.pexels.com/video-files/28947949/12525635_360_640_30fps.mp4",
//     img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
//     Profil:"Ritesh Tamang",
//     music:"hareya ma"
//   },
//   {
//     video:"https://videos.pexels.com/video-files/28947949/12525635_360_640_30fps.mp4",
//     img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
//     Profil:"Bajayadevekoat",
//     music:"jfalkjdkjhfkjdlkajl"
//   },
//   {
//     video:"https://videos.pexels.com/video-files/28947949/12525635_360_640_30fps.mp4",
//     img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
//     Profil:"parbinmagar",
//     music:"jalkhflkajlkajflkjdlk"
//   },
//   {
//     video:"https://videos.pexels.com/video-files/28947949/12525635_360_640_30fps.mp4",
//     img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
//     Profil:"lookindradajl",
//     music:"jdkajhncnae9re"
//   },
// ]
