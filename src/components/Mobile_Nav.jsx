import React from 'react'
import logo from '../../public/instagram.png'
import {  ChevronDown, Heart, MessageCircle } from 'lucide-react'

export default function Mobile_Nav() {
  return (
    <div className='block sm:hidden'>
        <div className='flex items-center justify-between p-4'>
        <div className='flex items-center '>
        <img className='h-[6vh]' src={logo} alt="" />
        <ChevronDown size={30}/>
      </div>
      <div className='flex gap-8'>
        <Heart size={30}/>
        <MessageCircle size={30}/>
      </div>
        </div>
      
    </div>
  )
}
