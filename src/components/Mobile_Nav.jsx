import React from 'react'
import logo from '../../public/instagram.png'
import {  ChevronDown, Heart } from 'lucide-react';
import { RiMessengerLine } from "react-icons/ri";

export default function Mobile_Nav() {
  return (
    <div className='block sm:hidden fixed bg-white z-50 w-full'>
        <div className='flex items-center justify-between px-4 py-2'>
        <div className='flex items-center '>
        <img className='md:h-[6vh] h-[4vh] ' src={logo} alt="Image" />
        <ChevronDown size={30}/>
      </div>
      <div className='flex gap-4'>
        <Heart size={26}/>
        <RiMessengerLine size={26}/>
      </div>
        </div>
      
    </div>
  )
}
