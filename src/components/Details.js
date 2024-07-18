import React from 'react'

const Details = ({ selectedStory, handleBackClick }) => {
  return (
    <div className='mt-8 p-6 bg-darkgrey rounded-lg'>
      <h2 className='text-xl mb-4'>Story Details</h2>
      <p><strong>Title:</strong> {selectedStory.title}</p>
      <p><strong>Creator:</strong> {selectedStory.creator}</p>
      <p><strong>Category:</strong> {selectedStory.category}</p>
      <p><strong>Created on:</strong> {selectedStory.createdOn}</p>
      <p><strong>Status:</strong> {selectedStory.status}</p>
      <button className='mt-4 p-2 bg-red-500 rounded' onClick={handleBackClick}>Back to List</button>
    </div>
  )
}

export default Details
