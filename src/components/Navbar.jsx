import React from 'react'
import { HandCoins,User } from 'lucide-react'

const Navbar = () => {
  return (
    <div>
        <div className='bg-white w-full lg:h-[8vmin] md:h-[6vmin]  h-[8vmin] fixed top-0 left-0 z-50 '>
            <div className='flex items-start justify-around p-2 '>
                <div className='flex items-center text-amber-400 font-bold lg:text-4xl md:text-3xl sm:text-2xl'>
                <HandCoins className='mr-2 text-amber-400 lg:size-10 md:size-8 size-6' /> ExpenseTrack
                </div>
                <div className='flex '>
                <button type='button' className='mx-4 p-1 border active:scale-95 border-amber-100 bg-mist-50 flex items-center rounded-full lg:text-2xl md:text-sm  text-xs'>
                    🔔
                </button>
                <div className='mx-3 p-1 border border-amber-400 bg-white flex items-center rounded-full md:text-2xl sm:text-xl'>
                    <User className='lg:size-8 md:size-5 sm:size-4 size-3 ' color="#000000" />
                </div>
                <div className='font-bold lg:text-2xl md:text-xl sm:text-sm mr-5 '>
                    You
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar