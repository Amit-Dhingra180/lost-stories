import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-[288px] h-[44px] rounded-[12px] bg-lightgrey flex items-center px-4'>
      <img src='\searchIcon.png' className='w-6 h-6 mr-1'/>
      <input type='text' placeholder='Search' className='w-full placeholder-white bg-lightgrey focus:outline-none caret-white' />
    </div>
  )
}

export default SearchBar