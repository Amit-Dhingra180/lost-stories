import React from 'react'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className='w-full h-[70px] bg-customgrey py-[13px] px-[30px] flex justify-between'>

      <SearchBar/>

      <div className='flex justify-between'>

        <div className='flex space-x-2 items-center'>

        <div>
          <img src='\light.png' className='w-[44px] h-[44px]'/>
        </div>

        <div>
          <img src='\notification.png' className='w-[44px] h-[44px]'/>
        </div>
      
        <div>
          <img src='\email.png' className='w-[44px] h-[44px]'/>
        </div>

        </div>

        <div className='h-[44px] w-[80px] bg-lightgrey rounded-[38px] ml-6 flex items-center justify-between px-1'>
          <img src='\profilepic.png' className='w-[44px] h-[44px]'/>
          <img src='\settings.png' className='w-[24px] h-[24px]'/>
        </div>

      </div>


    </div>
  )
}

export default Navbar