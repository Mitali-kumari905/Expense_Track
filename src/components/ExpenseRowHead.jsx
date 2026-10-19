import React, { useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { createPortal } from 'react-dom';

const ExpenseRowHead = ({selectCategories,setselectCategories}) => {
    const [filter,setfilter]=useState(false);
  return (
    <div className='w-full'>
        <div className='bg-amber-800 justify-between  flex gap-12 rounded flex-row p-2 text-white'>
            <div className='w-[32%]'>
                Description
            </div>
            <div className='bg-white w-2 rounded self-stretch'></div>
            <div className='w-[32%]'>
                Category
            </div>
            <div className='bg-white w-2 rounded self-stretch'></div>
            <div className='w-[30%]'>
                Amount
            </div>
            <div className='relative'>
                 <button
                  className='flex h-10 active:scale-95 rounded align-center p-2 bg-white'>
                     <SlidersHorizontal
                     onClick={()=>setfilter(!filter)} color="#252323" />
                </button>
                {filter && (
                     <div className="bg-white absolute text-xl text-amber-900 p-4 rounded-lg shadow-lg mt-2">
                        <h3 className="font-bold">Filter by category</h3>
                        {['Housing','Utilities','Food & Groceries','Transportation','Healthcare & Medical','Personal Care','Entertainment','Family & Pet Care','Saving & Investement'].map((category)=>(
                            <label key={category} className='flex text-sm items-center gap-2 mt-2'>
                                <input type="checkbox" checked={selectCategories.includes(category)}
                                onChange={()=>{
                                    setselectCategories((prev)=>prev.includes(category)?prev.filter((item)=>item!=category):[...prev,category]);
                                }} />{category}
                             </label>
                        ))}
                        <button type='button'
                        onClick={()=>setselectCategories([])}
                        className='mt-3 text-sm  w-full rounded-full bg-amber-800 p-2 text-white hover:bg-amber-900'>
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