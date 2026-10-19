import React, { useState } from 'react'
import {Menu,HandCoins} from 'lucide-react';

const Sidebar = ({side,useSide}) => {
  return (
    <div
      className={`relative shrink z-20 top-0  bg-black min-h-screen sm:max-w-[25%] md:max-w-[30%] lg:max-w-[35%] max-w-[35%] transition-transform duration-500 ease-in-out  ${side?"translate-x-[-80%]":"translate-x-0"}`}
      >
        <div className='py-10'>
      <div className={`w-full absolute left-1  flex justify-end lg:px-4 md:px-3 px-2 py-6 `}>
            <Menu
            onClick={()=>{
              if(side==false){
                useSide(true);
              }
              else{
                useSide(false);
              }
              
            }} color="#ffffff"
            className='lg:size-10 size-6' />
      </div>
      
      <div className={`transition-opacity duration-500 ease-in-out ${
    side ? "opacity-0 invisible" : "opacity-100 visible"
  }`}>
      <div className='py-7 px-8 lg:mr-6 md:mr-5 mt-6'>
        <div className='flex  flex-col lg:justify-start justify-center items-center text-amber-400 font-bold lg:text-3xl md:text-2xl sm:text-xl text-sm'>
          <HandCoins className='mr-2 text-amber-400 lg:size-9 md:size-8 sm:size-6 size-10' /> ExpenseTrack
        </div>
        <div className='bg-amber-200 max-w-[95%] min-h-0.5 mt-5 rounded '></div>
      </div>
      <div className='max-w-[85%] lg:ml-5 md:ml-4 ml-2 lg:py-5 md:py-3 py-2'>
        <div className='text-white font-bold lg:text-2xl md:text-xl sm:text-sm text-xs p-4' aria-hidden="true">
          🏠 Dashboard
        </div>
        <div className='text-white font-bold lg:text-2xl md:text-xl sm:text-sm text-xs p-4' aria-hidden="true">
          💳 Transactions
        </div>
      </div>
      <div className='p-7'>
        <div className='bg-amber-200 max-w-[85%] min-h-0.5 mt-5 rounded '></div>
       </div>
      <div className='max-w-[85%] lg:ml-6 md:ml-4 ml-2 lg:py-5 md:py-3 py-2'>
        <div className='text-white font-bold lg:text-2xl md:text-xl text-xs p-4' aria-hidden="true">
          ⚙️ Settings
        </div>
        <div className='text-white font-bold lg:text-2xl md:text-xl text-xs p-4' aria-hidden="true">
        🚪 Logout
        </div>
      </div>
      </div>

    
    </div>
    </div>
  )
}

export default Sidebar