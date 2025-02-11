import React from 'react'
import logo from '../../public/instagram.png'
import {  ChevronDown, Heart } from 'lucide-react';
import { RiMessengerLine } from "react-icons/ri";

export default function Mobile_Nav() {
  return (
    <div className='block sm:hidden'>
        <div className='flex items-center justify-between px-4 py-2'>
        <div className='flex items-center '>
        <img className='md:h-[6vh] h-[4vh] ' src={logo} alt="" />
        <ChevronDown size={30}/>
      </div>
      <div className='flex gap-8'>
        <Heart size={30}/>
        <RiMessengerLine size={30}/>
      </div>
        </div>
      
    </div>
  )
}
