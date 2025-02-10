import React from 'react'
import Left_Side from './components/Left_Side'
import Middle_Area from './components/Middle_Area'
import Right_Side from './components/Right_Side'

export default function App() {
  return (
    <div>

    <div div className='flex relative h-screen '>

      <div className='sticky w-3/12 lg:w-2/12 hidden border-r border-gray-300 sm:block top-0 h-screen'>

      <Left_Side/>

      </div>
    

      <div className='overflow-y-auto lg:w-6/12 sm:w-9/12   top-0 h-screen '>
      <Middle_Area/>

      </div>
      <div className='sticky top-0 w-3/12 lg:w-4/12 h-screen bg-gray-50 hidden lg:block' >
      <Right_Side/>

      </div>
      </div>
      
    
    </div>
  )
}
