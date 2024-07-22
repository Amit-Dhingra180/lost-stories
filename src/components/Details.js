import React from 'react'
import ProfileItem from './ProfileItem'

const Details = ({ selectedStory, handleBackClick }) => {
  return (
    <div className='flex p-1 space-x-6'>

      <div className='bg-white h-[534px] w-[25%] rounded-2xl py-[40px] flex flex-col items-center px-[20px]'>
        <img src='\profilepic.png' className='w-[110px] h-[110px] rounded-full mb-2'/>
        <h1 className='text-detailsgrey font-semibold'>Username</h1>
        <h2 className='text-detailslightgrey text-[14px] mb-6'>Full Name</h2>
        
          <ProfileItem text='Stuff' number='34'/>
          <ProfileItem text='Stuff' number='34'/>
          <ProfileItem text='Stuff' number='34'/>
        
          <button className='text-customorange min-h-6 w-full text-center border-2 border-customlightorange rounded-[8px] mb-4 mt-6'>
            <span>View </span>
          </button>

          <button className='text-detailsgrey min-h-6 w-full text-center border-2 border-bordergrey rounded-[8px]'>
            <span>Link</span>
          </button>

      </div>

      <div className='bg-white h-[534px] w-[70%] rounded-2xl'>

      </div>
    </div>
  )
}

export default Details
