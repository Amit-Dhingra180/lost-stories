import React, { useState } from 'react'
import Story from './Story'
import Details from './Details';


const Content = () => {
    const [stories, setStories] = useState([
        {id: 1, title: 'Sample Title', creator: 'Sample Creator', category: 'Action', createdOn: '12/05/2009', status: 'Yet'},
        {id: 2, title: 'Sample Title 2', creator: 'Sample Creator 2', category: 'Drama', createdOn: '15/06/2010', status: 'Yet'}
    ]);

    const [selectedStory, setSelectedStory] = useState(null);

    const handleStoryClick = (story) => {
        setSelectedStory(story);
    };

    const handleBackClick = () => {
        setSelectedStory(null);
    };

    return (
        <div className='text-white w-full'>
            {!selectedStory?(
                <h1 className='text-2xl mt-6 ml-7'>
                    Stories for Review
                </h1>
            ) : (
                <h1 className='text-2xl mt-6 ml-7'>
                    {selectedStory.title}
                    <span className='text-greytext'> by {selectedStory.creator}</span>
                    <h2 className='text-[18px] text-customorange'>{selectedStory.category}</h2>
                </h1>
            )}


            <div className='px-[30px] py-4'>
                {!selectedStory ? (
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
                ) : (
                    <Details selectedStory={selectedStory} handleBackClick={handleBackClick} />
                )}
            </div>
        </div>
    )
}

export default Content
