import { Bookmark, ContactRound, Film, Grid3x3, Heart, MessageCircle } from 'lucide-react'
import React from 'react'

export default function Profile_Feed_Section() {
  return (
    <div className=''>

        <div className='flex gap-8 ml-60'>
        <div className='flex items-center gap-1 px-4 py-2 hover:border-t hover:border-gray-500 w-max'>
     <Grid3x3 className='opacity-60' size={12} />
     <p className='font-bold text-sm opacity-70'>POSTS</p>
     </div>

     <div className='flex items-center gap-1 px-4 py-2 hover:border-t hover:border-gray-500 w-max'>
     <Film className='opacity-60' size={12} />
     <p className='font-bold text-sm opacity-70'>REEL</p>
     </div>

     <div className='flex items-center gap-1 px-4 py-2 hover:border-t hover:border-gray-500 w-max'>
     <Bookmark className='opacity-60' size={12} />
     <p className='font-bold text-sm opacity-70'>SAVED</p>
     </div>

     <div className='flex items-center gap-1 px-4 py-2 hover:border-t hover:border-gray-500 w-max'>
     <ContactRound className='opacity-60' size={12} />
     <p className='font-bold text-sm opacity-70'>TAGGED</p>
     </div>
        </div>

        <div  className='flex gap-x-4 '>
          
        {
          Posts.map((item,index)=>(

            <div key={index} className='w-[20vw] h-[40vh] relative cursor-pointer overflow-hidden py-2'>
            <img height={200} width={300} src={item.img} alt="Image" />           
          
           <div className='flex items-center justify-center  '>

           <div className=' text-white absolute flex top-36 gap-16'>

            <Heart className='' />
            <MessageCircle/>
            </div>
                
            </div>
           </div>

          ))
        }

        </div>



           
        </div>
     
  
  )
}

const Posts=[
  {
    img:"https://images.unsplash.com/photo-1738494610263-4e27d9d4e201?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  
    {
      img:"https://images.unsplash.com/photo-1738494610263-4e27d9d4e201?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
   
      {
        img:"https://images.unsplash.com/photo-1738494610263-4e27d9d4e201?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }
]
