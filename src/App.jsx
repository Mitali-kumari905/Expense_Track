import React, { useState,useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import ExpenseRow from './components/ExpenseRow'
import ExpenseRowHead from './components/ExpenseRowHead'
import SearchBar from './components/SearchBar'
import img1 from './assets/c1.png';
import img2 from './assets/financial_growth_graph_with_coins_and_arrow-png.webp';
import img3 from './assets/c3.png';

const App = () => {
  const [income, setincome] = useState(()=>{
    const saved=localStorage.getItem("income");
    return saved!==null?Number(saved):0;
  })
  const [expense,setexpense]= useState(()=>{
    const saved=localStorage.getItem("expense");
    return saved!==null?Number(saved):0;
  })
  const [expenseList,setExpenseList]= useState(()=>{
    const saved=localStorage.getItem("expenseList");
    return saved ?JSON.parse(saved):[];
  })
  const [selectCategories,setselectcategories]=useState([]);
  const balance=income-expense;
  const [search,setSearch]=useState('');
  const [side,useSide]=useState(false);
  const cardData=[
    {
    img:img1,
    money:balance, 
    val:"Balance", 
    idx:1,
    change:false,
  },
  {
    img:img2,
    money:income,
    val:"Income",
    idx:2,
    change:true,
    setIncome:setincome,
  },
  {
    img:img3,
    money:expense,
    val:"Expense",
    idx:3,
    change:false,
    add:true,
    setExpenses:setexpense,
  }
  ]
  useEffect(()=>{
    localStorage.setItem("income",income);
  },[income]);
 
  useEffect(()=>{
    localStorage.setItem("expense",expense);
  },[expense]);

  useEffect(()=>{
    localStorage.setItem("expenseList",JSON.stringify(expenseList));
  },[expenseList]);
  return (
    <div className='min-h-screen w-full bg-amber-300 overflow-y-auto'>
      <Navbar />
      <div className='flex w-full min-w-0'>
      <Sidebar side={side} useSide={useSide} />
      <div className={`my-[10vh] min-w-0 flex-1 p-4 -x-hidden transition-transform duration-500 ${
    side ? "-translate-x-20" : "translate-x-0"
  }`}>
        <div className=' flex gap-1 items-center flex-col text-amber-800 font-bold lg:text-3xl sm:text-xl md:text-2xl'>
          <p>Welcome back! 👋</p>
          <p>Let's keep your expenses on track.</p>
          <div className='flex lg:flex-row flex-col gap-4 lg:text-3xl text-2xl mt-1'>
            {cardData.map((el)=>{
              return <Cards key={el.idx} img={el.img} money={el.money}
                             val={el.val} change={el.change} add={el.add}
                             setIncome={el.setIncome} setExpenses={el.setExpenses}
                             expenseList={expenseList} setExpenseList={setExpenseList} />
            })}
          </div>
          {expenseList.length === 0?null:(<div className='flex flex-col w-full'>
            <div className='py-2 flex flex-col items-center self-center mt-6 text-white lg:text-4xl md:text-3xl sm:text-2xl'>
              <p>Recent Expenses</p>
              <div>
                <SearchBar search={search} setSearch={setSearch} />
              </div>
            </div>
            <div>
              <div>
                <ExpenseRowHead 
                selectCategories={selectCategories} setselectCategories={setselectcategories}
                 /> 
              </div>
              <div className='my-2 py-2'>
                <ExpenseRow expenseList={expenseList} setExpenseList={setExpenseList} setexpense={setexpense} 
                selectCategories={selectCategories} setselectCategories={setselectcategories} search={search} 
                 />
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
      </div>
    </div>
  )

}

export default App