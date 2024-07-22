import React from 'react'
import { useState } from 'react';
import SideMenu from '../components/SideMenu'
import Navbar from '../components/Navbar'
import { useParams, useNavigate } from 'react-router-dom';
import Details from '../components/Details';

const StoryInfo = () => {
    const { id } = useParams();
    const [story, setStory] = useState({id: 5, title: 'Sample Title ', creator: 'Sample Creator ', category: 'Action', createdOn: '12/05/2009', status: 'Yet'});
    
    const navigate = useNavigate();
    
    const handleBackClick = () => {
        navigate('/review');
    }
    return (
        <div className='flex text-white'>
            <SideMenu/>
            <div className=' bg-darkgrey w-full min-h-screen'>
                <Navbar/>
                <div>{id}</div>
                <div className='px-[30px] py-2'>
                <Details selectedStory={story} handleBackClick={handleBackClick}/>
                </div>
            </div>
        </div>
      )
    }

export default StoryInfo