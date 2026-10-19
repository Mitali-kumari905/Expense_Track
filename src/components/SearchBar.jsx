import React, { useState } from 'react'
import { Search } from 'lucide-react'

const SearchBar= ({search,setSearch}) => {
  return (
    <div className='flex flex-row gap-2 items-center'>
      <div className='w-full p-3'>
        <div className='relative flex items-center'>
          <div  className='absolute left-4 group-focus-within:text-amber-800 transition-colors  duration-200'>
          <Search color="#252323" />
          </div>
          <input
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          type="number" placeholder="Search amount..." className='w-full pl-11 pr-20 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-amber-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all duration-200' />
        </div>
      </div>

     
    </div>
  )
}

export default SearchBar