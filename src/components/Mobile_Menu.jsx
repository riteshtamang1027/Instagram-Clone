import { Film, House, Search, SquarePlus, User } from 'lucide-react'
import React from 'react'

export default function Mobile_Menu() {
  return (
    <div className='fixed bottom-0 block sm:hidden w-full bg-gray-100 p-4  border-t border-gray-300'>
        <div className='flex items-center justify-between '>
            <House/>
            <Search/>
            <SquarePlus />
            <Film/>
            <User/>
            

        </div>
     
    </div>
  )
}

