import React from 'react'


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

        <div className='flex justify-between mt-[20px]'>

          <div className='flex'>
            <img src='\musicIcon.png' className='w-[24px] h-[24px] mr-2'/>
          <span>Stories</span>
          </div>

          <div className='flex items-end'>
            <img src='\expand.png' className='w-[20px] h-[20px]'/>
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default SideMenu