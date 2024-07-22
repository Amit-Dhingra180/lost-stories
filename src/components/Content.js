import React, { useState } from 'react'
import Story from './Story'
import { useNavigate } from 'react-router-dom';


const Content = () => {
    const navigate = useNavigate();
    const [stories, setStories] = useState([
        {id: 1, title: 'Sample Title 1', creator: 'Sample Creator 1', category: 'Action', createdOn: '12/05/2009', status: 'Yet'},
        {id: 2, title: 'Sample Title 2', creator: 'Sample Creator 2', category: 'Drama', createdOn: '15/06/2010', status: 'Yet'}
    ]);


    const handleStoryClick = (story) => {
        navigate(`/StoryInfo/${story.id}`);
    };


    return (
        <div className='text-white w-full'>
            
                <h1 className='text-2xl mt-7 ml-7'>
                    Stories for Review
                </h1>
            

            <div className='px-[30px] py-4'>
                
                    <table className='w-full mt-8'>
                        <thead>
                            <tr className='text-lightgrey'>
                                <td>Title</td>
                                <td>Creator</td>
                                <td>Category</td>
                                <td>Created on</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            {stories.map((story) => (
                                <Story key={story.id} story={story} onClick={() => handleStoryClick(story)} />
                            ))}
                        </tbody>
                    </table>
                
            </div>
        </div>
    )
}

export default Content
