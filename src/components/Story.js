import React from 'react';

const Story = ({ story, onClick }) => {
    return (
        <tr className='bg-lightgrey mt-1 h-[60px] border-4 border-darkgrey cursor-pointer' onClick={onClick}>
            <td className="p-2.5">{story.title}</td>
            <td className="p-2.5">{story.creator}</td>
            <td className="p-2.5">{story.category}</td>
            <td className="p-2.5">{story.createdOn}</td>
            <td className="p-2.5">{story.status}</td>
        </tr>
    );
};

export default Story;
