import React, { useState } from 'react'
import { TrendingDown,IndianRupee } from 'lucide-react';

const AddExpense = (props) => {
    const [amount,setAmount]=useState(0);
    const [category,setCategory]=useState("");
    const [description,setDescription]=useState("");
    const [custCategory,setcustCategory]=useState("");

  return (
                  <div className='bg-white lg:w-[40%] md:w-[50%] w-[60%] p-5  rounded-lg'>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        const NewExpenseList={
                            id:Date.now(),
                            amount:Number(amount),
                            category:category=="Other"?custCategory:category,
                            description:description.length==0?<div className='w-full h-full justify-center flex'><div className='self-start'>____</div></div>:description,
                        }
                        props.setExpenseList((prev)=>[...prev,NewExpenseList,]);
                        props.setExpenses(
                            (prev)=>prev+Number(amount)
                        );
                        props.setshow2(false);
                    }}>
                <div className='p-2'>
                <div className=''>
                  <h3 className='lg:text-2xl md:text-xl sm:text-sm text-xs font-bold'>Add new Expenses</h3>
                  <p className='text-black/45 py-1 lg:text-xl md:text-sm text-xs '>Log expenses instantly, manage effortlessly.</p>

                  <div className='w-[90%] bg-black/50 h-0.5'></div>
                </div>
                <div className='w-full flex flex-col lg:p-4 md:p-2 p-1 lg:my-3 md:my-2 my-1 justify-center items-center'>
                  <div className='bg-cyan-200 border border-cyan-500 md:py-2 sm:py-0.5 md:px-6 sm:px-2 flex flex-col rounded items-center'>
                  <div className=''>
                    <TrendingDown color="#252323" size={30} />
                  </div>
                    <p className='md:text-lg sm:text-sm text-xs font-semibold'>Expenses</p>
                  </div>
                </div>

                <div  className='flex lg:flex-row gap-2 flex-col justify-between'>

                    <div>
                    <div>
                        <p className='font-semibold'>
                        Enter Expense Balance
                        </p>
                    </div>
                    <div className='mt-2 lg:p-4 md:p-3 p-2 bg-gray-300 flex items-center flex-row border rounded-xl border-gray-500'>
                    <p><IndianRupee color="#252323" className='lg:p-1 p-0.5 lg:size-10 md:size-8 size-7' /></p>
                        <input type="number" value={amount} min="1" required placeholder='Money Spended'
                         className='bg-gray-400 rounded-full w-full px-5 h-10 focus:outline focus:outline-sky-400'
                        onChange={(e)=>{
                            setAmount(e.target.value);
                        }} />
                    </div>
                    <p className='py-2 md:text-sm text-xs text-gray-500 font-semibold'>Enter the total Income in Indian Rupee</p>
                    </div>

                    <div>
                        <div>
                            <p className='font-semibold'>
                            Category
                            </p>
                        </div>
                        <div className='lg:text-2xl md:text-xl sm:text-sm text-xs'>
                            <select required
                            value={category}
                             onChange={(e)=>{
                                setCategory(e.target.value)
                             }}
                             id="category" className='select w-full px-4 py-3 rounded mt-3 shadow-lg bg-slate-100 focus:outline-none focus:border focus:border-blue-300'>
                                <option value="">Select Category</option>
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
                    </div>
                </div>
                {category=="Other"?<div>
                    <div className='py-4'>
                    <p className='py-1 font-semibold'>Specify the category</p>
                    <input
                    onChange={(e)=>{
                        setcustCategory(e.target.value);
                    }} required id="category" className='border py-1 px-2 rounded border-slate-300 w-[50%] focus:outline-none focus:border focus:border-blue-300 '></input>
                </div>
                </div>:null}

                <div className='py-4'>
                    <p className='py-1 font-semibold'>Description</p>
                    <textarea placeholder='e.g. mode of payment,what you have buyed' id="description" 
                    className='border py-2 px-2 rounded border-slate-300 w-full focus:outline-none focus:border focus:border-blue-300 '
                    onChange={(e)=>{
                        setDescription(e.target.value);
                    }} ></textarea>
                </div>
                <div className='w-full flex justify-center gap-6 py-3 '>
                    <button onClick={()=>{
                    props.setshow2(false);
                    }} className='bg-white text-black border border-gray-400 font-semibold py-3 px-6 rounded-full'>Discard</button>
                    <button
                    type='submit'
                    className='bg-black text-white py-3 px-6 font-semibold rounded-full'>Save</button>
              </div>
            </div>
            </form>
      </div>

  )
}

export default AddExpense