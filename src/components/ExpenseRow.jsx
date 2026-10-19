import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import EditExpense from './EditExpense';

const ExpenseRow = ({ expenseList,setExpenseList,setexpense,selectCategories,setselectCategories,search }) => {
    const [selectedExpense,setSelectedExpense]=useState(null);

    const filterexpenses = expenseList.filter((el) => {

    // STEP 1: Check whether the expense amount matches the search.

    const matchesAmount =
        // If the search box is empty, allow all amounts.
        search.trim() === '' ||

        // Otherwise, check if the expense amount equals the searched amount.
        // Number() converts the values to numbers before comparing them.
        Number(el.amount) === Number(search);


    // STEP 2: Check whether the expense category matches the selected categories.

    const matchesCategory =
        // If no categories are selected, allow all categories.
        selectCategories.length === 0 ||

        // Otherwise, check whether this expense's category is selected.
        selectCategories.includes(el.category);


    // STEP 3: Combine the amount search and category filter.
    // && means AND: both conditions must be true for the expense to appear.

    return matchesAmount && matchesCategory;

    });

  return (
            <div className='w-full flex flex-col gap-3 lg:text-2xl md:text-xl sm:text-sm font-semibold'>
                {filterexpenses.map((el)=>(
                     <div key={el.id} className='bg-white border-2 border-amber-200 shadow-sm  justify-between flex gap-4 lg:min-h-30 md:min-h-20 sm:min-h-10 rounded-lg flex-row p-3 text-amber-800'>
                <div className='w-[30%] overflow-y-auto'>
                    {el.description}
                </div>
                <div className='bg-amber-800 w-2 rounded self-stretch'></div>
                <div className='w-[30%]'>
                    {el.category}
                </div>
                <div className='bg-amber-800 w-2 rounded self-stretch'></div>
                <div className="w-[30%]">
                    {el.amount}
                </div>
                <div>
                <button
                onClick={()=>{
                    setSelectedExpense(el);
                }}
                 className='bg-amber-400 p-1 md:text-xl sm:text-sm active:scale-95 rounded '>Edit</button>
                 {selectedExpense && createPortal(
            <div className='fixed inset-0 flex items-center justify-center bg-black/50'>
                <EditExpense key={selectedExpense.id} setExpenseList={setExpenseList} setexpense={setexpense}   setSelectedExpense={setSelectedExpense} selectedExpense={selectedExpense} />
            </div>,
            document.body
                 )}
                </div>
            </div>
            ))}

    </div>
  );
};

export default ExpenseRow