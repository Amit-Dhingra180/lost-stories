import React from 'react'
import SideMenuOptions from './SideMenuOptions'

const SideMenu = () => {
  return (
    <div className='w-[240px] min-h-screen bg-black py-[32px] text-white'>
      
        <div className='flex justify-center'> 
          <img src='\logo.png' className='w-[136px] h-[39px]'/>
        </div>
        

      <div className='mt-[32px] mx-[16px]'>

        <div className='flex'>
          <img src='\dashboard.png' className='w-[24px] h-[24px] mr-2'/>
          <span>Dashboard</span>
        </div>

        <SideMenuOptions option='Stories'/>
        <SideMenuOptions option='Users and Roles'/>
        <SideMenuOptions option='Tickets'/>

        
      </div>

    </div>
  )
}

export default SideMenu