import React from 'react'
import Navbar from '../components/Navbar'
import SideMenu from '../components/SideMenu'

const Review = () => {
  return (
    <div className='flex'>
        <SideMenu/>
        <div className=' bg-darkgrey w-full min-h-screen'>
            <Navbar/>
        </div>
    </div>
  )
}

export default Review