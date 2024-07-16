import React from 'react'
import Story from './Story'
import { useEffect, useState } from 'react'

const Content = () => {

    const [stories, setStories] = useState([])

    const fetchData = async () => {
        try {
          const response = await fetch('enterURL'); //Enter your API endpoint
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setStories(data); 
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

  return (
    <div className='text-white w-full'>
        <h1 className='text-2xl mt-6 ml-7'>Stories for Review</h1>
        
        <div className='px-[30px]'>
        <table className='w-full mt-8'>
            <tr className='text-lightgrey'>
                <td>
                    Title
                </td>
                <td>
                    Creator
                </td>
                <td>
                    Category
                </td>
                <td>
                    Created on
                </td>
                <td>
                    Status
                </td>
            </tr>

            {stories.map((story) => (
            <Story key={story.id} story={story} />
          ))}
                
            
        </table>
        </div>

    </div>
  )
}

export default Content