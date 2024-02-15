import { SearchIcon } from 'lucide-react';
import React from 'react';

const SearchBar = () => {
  return (
    <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
      <input type="text" className='p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none'/>
      <SearchIcon className='h-12 m-3 p-0.5'/>
    </div>
  )
}

export default SearchBar