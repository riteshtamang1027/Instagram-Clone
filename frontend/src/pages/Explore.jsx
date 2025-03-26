import { Clapperboard } from 'lucide-react'
import React from 'react'

export default function Explore() {
  return (
    <div className='xl:w-9/12 w-[100vw] mx-auto'>
      <div className='block lg:hidden '>
       <input type="text" className='outline-none border border-gray-300 not-first:' />
      </div>

    <div className='grid grid-cols-3 gap-x-8 gap-y-4 mt-12'>
    {
      ExploreReels.map((item,index)=>(
        <div key={index} className=' relative w-76 overflow-hidden h-76 border border-gray-300 bg-black cursor-pointer'>
        <video className='h-full w-full object-cover' src={item.reel}></video>

        <Clapperboard size={26} className='opacity-70 absolute top-2 text-white right-2'/>

      </div>

      ))
    }
    </div>

     


    </div>
  )
}


const ExploreReels = [
  {
    reel:"https://videos.pexels.com/video-files/30207950/12951570_640_360_24fps.mp4"
  },
  {
    reel:"https://videos.pexels.com/video-files/31243700/13344123_360_640_24fps.mp4"
  },
  {
    reel:"https://videos.pexels.com/video-files/30985846/13246013_360_640_60fps.mp4"
  },
  {
    reel:"https://videos.pexels.com/video-files/31219121/13334683_360_640_30fps.mp4"
  },
  {
    reel:"https://videos.pexels.com/video-files/31187306/13323002_360_640_60fps.mp4"
  },
  {
    reel:"https://videos.pexels.com/video-files/30730662/13146453_640_360_25fps.mp4"
  },
  {
    reel:"https://videos.pexels.com/video-files/30825911/13183342_360_640_30fps.mp4"
  },
  {
    reel:"https://videos.pexels.com/video-files/30946897/13232149_360_640_60fps.mp4"
  },
  {
    reel:"https://videos.pexels.com/video-files/31078357/13280168_640_360_25fps.mp4"
  },
]
