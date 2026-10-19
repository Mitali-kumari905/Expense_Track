import React, { useState } from 'react'
import { createPortal } from "react-dom"
import SetIncome from './SetIncome';
import AddExpense from './AddExpense';

const Cards = (props) => {
  
  const [show,setShow]=useState(false);
  const [show2,setshow2]=useState(false);
  return (
    <div>
        <div className='flex flex-col items-center lg:w-80 md:w-70 sm:w-60 w-50 h-70 bg-white rounded hover:scale-105'>
            <div className='p-2'>
                <img className='w-30 h-20' src={props.img}/>
            </div>
            <div className='text-black flex flex-col items-center'>
              <p className='font-bold'>Rs.{props.money}</p>
              <p className='font-semibold'>${(Number(props.money) / 96.85).toFixed(4)}</p>
            </div>
            <div className='py-2'>
              <p>{props.val}</p>
            </div>
            {(props.change)?<button className='my-4  bg-amber-400 p-1 text-xl active:scale-95 rounded '>
             <p onClick={()=>{
                setShow(true);
              }}>Change</p>
            </button>:null}
           {show && createPortal(
            <div className='fixed inset-0 z-70 flex items-center justify-center bg-black/50'>
              <SetIncome setShow={setShow} income={props.money} SetIncome={props.setIncome} />
            </div>,
            document.body
           )}

            {(props.add)?<button className='my-4  bg-amber-400 p-1 text-xl active:scale-95 rounded '>
             <p onClick={()=>{
                setshow2(true);
              }}>Add</p>
            </button>:null}
           {show2 && createPortal(
            <div className='fixed inset-0 z-70 overflow-x-auto  flex items-center justify-center bg-black/50'>
              <AddExpense setshow2={setshow2} expense={props.money} setExpenses={props.setExpenses} expenseList={props.expenseList} setExpenseList={props.setExpenseList} />
            </div>,
            document.body
           )}

        </div>
    </div>
  )
}

export default Cards