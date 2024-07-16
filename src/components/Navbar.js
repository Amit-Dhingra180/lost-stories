import React from 'react'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className='w-full h-[70px] bg-customgrey py-[13px] px-[30px] justify-between'>
      <SearchBar/>
    </div>
  )
}

export default Navbar