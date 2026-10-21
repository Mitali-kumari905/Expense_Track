import React, { useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { createPortal } from 'react-dom';

const ExpenseRowHead = ({selectCategories,setselectCategories}) => {
    const [filter,setfilter]=useState(false);
  return (
    <div className='w-full'>
        <div className='bg-amber-800 lg:text-2xl md:text-xl text-xs justify-between  flex  rounded flex-row lg:p-2 md:p-1 p-0 text-white'>
            <div className='lg:w-[32%] w-[22%] pr-0.5'>
                Description
            </div>
            <div className='bg-white lg:w-2 md:w-1 w-0.5 rounded self-stretch'></div>
            <div className='lg:w-[32%] w-[22%]'>
                Category
            </div>
            <div className='bg-white lg:w-2 md:w-1 w-0.5 rounded self-stretch'></div>
            <div className='lg:w-[30%] w-[20%]'>
                Amount
            </div>
            <div className='relative'>
                 <button
                  className='flex lg:h-7 md:h-6 h-5 m-1 active:scale-95 rounded align-center lg:p-2 p-1 bg-white'>
                     <SlidersHorizontal className='lg:size-6 md:size-5 size-4'
                     onClick={()=>setfilter(!filter)} color="#252323" />
                </button>
                {filter && (
                     <div className="bg-white absolute text-xl  text-amber-900 p-4 rounded-lg shadow-lg mt-2">
                        <h3 className="font-bold">Filter by category</h3>
                        {['Housing','Utilities','Food & Groceries','Transportation','Healthcare & Medical','Personal Care','Entertainment','Family & Pet Care','Saving & Investement'].map((category)=>(
                            <label key={category} className='flex md:text-sm text-xs items-center gap-2 mt-2'>
                                <input type="checkbox" checked={selectCategories.includes(category)}
                                onChange={()=>{
                                    setselectCategories((prev)=>prev.includes(category)?prev.filter((item)=>item!=category):[...prev,category]);
                                }} />{category}
                             </label>
                        ))}
                        <button type='button'
                        onClick={()=>setselectCategories([])}
                        className='mt-3 md:text-sm text-xs w-full rounded-full bg-amber-800 p-2 text-white hover:bg-amber-900'>
                            Clear Filters
                        </button>

                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default ExpenseRowHead