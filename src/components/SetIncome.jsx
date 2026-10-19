import React, { useState } from 'react'
import { TrendingUp,IndianRupee } from 'lucide-react';


const SetIncome = (props) => {

    const [dupIncome,setdupIncome]=useState(0);
  return (
                  <div className='bg-white lg:w-[30%] w-[50%] p-5 rounded-lg -y-auto'>
                    <form onSubmit={(e)=>{
                      e.preventDefault();
                      props.setShow(false);
                      props.SetIncome(Number(dupIncome));

                    }}>
                <div className='p-2'>
                <div className=''>
                  <h3 className='lg:text-2xl md:text-xl  text-sm font-bold'>SetIncome</h3>
                  <p className='text-black/45 py-1 lg:text-xl md:text-sm text-xs '>Update Your Financial Amount</p>

                  <div className='w-[90%] bg-black/50 h-0.5'></div>
                </div>
                <div className='w-full flex flex-col lg:p-4 md:p-3 sm:p-2 p-1 my-3 justify-center items-center'>
                  <div className='bg-cyan-200 border border-cyan-500 py-2 px-6 flex flex-col rounded items-center'>
                  <div className=''>
                    <TrendingUp color="#252323" size={30} />
                  </div>
                    <p className='lg:text-xl text-sm font-semibold'>Income</p>
                  </div>
                </div>

                <div>
                  <div>
                    <p className='font-semibold'>
                      Enter Income Balance
                    </p>
                  </div>
                  <div className='lg:mt-2 mt-1 lg:p-4 md:p-3 sm:p-2 p-1 bg-gray-300 flex items-center flex-row border rounded-xl border-gray-500'>
                  <p><IndianRupee color="#252323" className='p-1' size={30} /></p>
                    <input type="number" min="0" required  placeholder='Enter New Income' className='bg-gray-400 rounded-full w-full px-5 h-10 focus:outline focus:outline-sky-400'
                    onChange={(e)=>{
                        setdupIncome(e.target.value);
                    }} />
                  </div>
                  <p className='py-2 lg:text-sm text-xs text-gray-500 font-semibold'>Enter the total Income in Indian Rupee</p>
                </div>
                <div className='w-full flex justify-center gap-6 py-3 '>
                    <button  onClick={()=>{
                    props.setShow(false);
                    }} className='bg-white text-black border border-gray-400 font-semibold lg:py-3 md:py-2 py-1 lg:px-6 md:px-4 px-2 rounded-full'>Discard</button>
                    <button type='submit' onClick={()=>{

                    }}
                    className='bg-black text-white lg:py-3 md:py-2 py-1 lg:px-6 md:px-4 px-2 font-semibold rounded-full'>Save</button>
              </div>
            </div>
            </form>
      </div>
  )
}

export default SetIncome