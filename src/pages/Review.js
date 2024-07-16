import React from 'react'
import Navbar from '../components/Navbar'
import SideMenu from '../components/SideMenu'
import Content from '../components/Content'

const Review = () => {
  return (
    <div className='flex'>
        <SideMenu/>
        <div className=' bg-darkgrey w-full min-h-screen'>
            <Navbar/>
            <Content/>
        </div>
    </div>
  )
}

export default Review