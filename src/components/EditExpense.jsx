import React, { useState } from 'react'
import { IndianRupee } from 'lucide-react';

const EditExpense = (props) => {
    const [dupCategory,setdupCategory]=useState(props.selectedExpense.category);
    const [dupdescription,setdupdescription]=useState(props.selectedExpense.description);
    const [dupamount,setdupamount]=useState(props.selectedExpense.amount);
    const [dupCustCategory,setdupCustCategory]=useState('');
  return (
    <div className='bg-white  w-[30%] p-5 rounded-lg'>
        <form onSubmit={(e)=>{
            e.preventDefault();
            props.setexpense((prev)=>prev-props.selectedExpense.amount+Number(dupamount))
            props.setExpenseList((prev)=>{
                return prev.map((item)=>{
                    return item.id===props.selectedExpense.id?{
                        ...item,
                        category:dupCategory==="Other"?dupCustCategory:dupCategory,
                        amount:dupamount,
                        description:dupdescription,
                    }:item
                })
            })



            
            props.setSelectedExpense(null);
        }}>
            <div className='p-2'>
                <div>
                    <p className='text-xl font-bold'>Edit Expense</p>
                    <p className='py-1 text-gray-600'>Update the details of your expense</p>
                </div>
                <div className='h-0.5 w-[80%] bg-gray-300'></div>
            </div>
            <div className='py-4'>
                <div>
                    <div>
                        <p className='text-lg font-semibold'>Category</p>
                    </div>
                            <select required
                            value={dupCategory}
                             onChange={(e)=>{
                                setdupCategory(e.target.value);
                             }}
                             id="category" className='select w-full px-4 py-3 rounded mt-3 shadow-lg bg-slate-100 focus:outline-none focus:border focus:border-blue-300'>
                                <option value="Housing">Housing</option>
                                <option value="Utilities">Utilities</option>
                                <option value="Food & Groceries">Food & Groceries</option>
                                <option value="Transportation">Transportation</option>
                                <option value="Healthcare & Medical">Healthcare & Medical</option>
                                <option value="Personal Care">Personal Care</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Family & Pet Care">Family & Pet Care</option>
                                <option value="Savings & Investments">Savings & Investments</option>
                                <option value="Other">Other</option>
                            </select>
                </div>
                {dupCategory==="Other"?<div>
                    <div className='py-4'>
                    <p className='py-1 font-semibold'>Specify the category</p>
                    <input
                    onChange={(e)=>{
                        setdupCustCategory(e.target.value);
                    }} id="category" className='border py-1 px-2 rounded border-slate-300 w-[50%] focus:outline-none focus:border focus:border-blue-300 '></input>
                </div>
                </div>:null}
                <div className='py-2'>
                    <div className='py-1'>
                        <p className='text-lg font-semibold'>Amount</p>
                    </div>
                    <div className='mt-2 p-4 bg-gray-300 flex items-center flex-row border rounded-xl border-gray-500'>
                    <p><IndianRupee color="#252323" className='p-1' size={30} /></p>
                        <input type="number" value={dupamount} min="1"  placeholder='Money Spended'
                         className='bg-gray-400 rounded-full w-full px-5 h-10 focus:outline focus:outline-sky-400'
                        onChange={(e)=>{
                            setdupamount(e.target.value);
                        }} />
                    </div>
                </div>
                <div className='py-4'>
                    <p className='py-1 font-semibold'>Description</p>
                    <textarea value={dupdescription}  id="description" 
                    className='border py-2 px-2 rounded border-slate-300 w-full focus:outline-none focus:border focus:border-blue-300 '
                    onChange={(e)=>{
                        setdupdescription(e.target.value);
                    }} ></textarea>
                </div>

            </div>
            <div className='w-full flex flex-col gap-2 items-center '>
                <div className='font-semibold text-lg flex justify-center gap-4'>
                <button type='submit'
                className='px-5 py-3 border-2 border-black text-black hover:bg-black hover:text-white focus:scale-95 rounded-full'
                >submit
                </button>

                <button type='button' className='px-5 py-3 border-2 border-black text-black hover:bg-black hover:text-white focus:scale-95 rounded-full'
                 onClick={()=>{
                    props.setSelectedExpense(null);
                }}>
                    Discard
                </button>
                </div>
                <div>
                    <button type='button' className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold rounded-full focus:scale-95 px-10 py-3'
                    onClick={()=>{
                        props.setExpenseList((prev)=>prev.filter((item)=>
                            item.id!==props.selectedExpense.id
                        ));
                        props.setexpense((prev)=>prev-props.selectedExpense.amount)
                        props.setSelectedExpense(null);

                    }}>Delete</button>
                </div>
            </div>

        </form>
    </div>
  )
}

export default EditExpense