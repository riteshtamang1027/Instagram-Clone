import React from 'react'
import Left_Side from './components/Left_Side'
import Middle_Area from './components/Middle_Area'
import Right_Side from './components/Right_Side'

export default function App() {
  return (
    <div div className='grid grid-cols-3'>
    <Left_Side/>
    <Middle_Area/>
    <Right_Side/>
    
    </div>
  )
}
