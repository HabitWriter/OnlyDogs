import React from 'react'

export const Search = () => {
  return (
    <div className='search border-b border-gray-400'>
      {/* This is the search form */}
        <div className="searchForm px-4 py-2">
            <input type="text" placeholder="Find a Dawg..." className=" border-none text-white placeholder-white focus:outline-none bg-transparent" />
        </div>
       
    </div>
  )
}

export default Search
