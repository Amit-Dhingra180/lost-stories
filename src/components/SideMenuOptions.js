import React from 'react'

const SideMenuOptions = ({option}) => {
  return (
    <div className='flex justify-between mt-[20px] text-white'>

          <div className='flex'>
            <img src='\musicIcon.png' className='w-[24px] h-[24px] mr-2'/>
          <span>{option}</span>
          </div>

          <div className='flex items-end'>
            <img src='\expand.png' className='w-[20px] h-[20px]'/>
          </div>
          
        </div>
  )
}

export default SideMenuOptions