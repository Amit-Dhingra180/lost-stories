import React from 'react';
import ProfileItem from './ProfileItem';
import DetailsHeading from './DetailsHeading';

const Details = ({ selectedStory, handleBackClick }) => {
  const headings = ['Heading-1', 'Heading-2','Heading-3','Heading-4','Heading-5'];

  return (
    <div>
      <div className='flex justify-between items-center mb-2'>
        <h1 className='text-2xl mt-5'>
          {selectedStory.title}
          <span className='text-greytext'> by {selectedStory.creator}</span>
          <h2 className='text-[18px] text-customorange'>{selectedStory.category}</h2>
        </h1>
        <button className='text-white w-[98px] h-[46px] rounded-lg bg-customorange px-6 py-3 font-nunito mr-[5%]'>
          Assign
        </button>
      </div>
      <div className='flex p-1 space-x-6 font-nunito'>
        <div className='bg-white h-[534px] w-[25%] rounded-2xl py-[40px] flex flex-col items-center px-[20px]'>
          <img src='/profilepic.png' className='w-[110px] h-[110px] rounded-full mb-2' />
          <h1 className='text-detailsgrey font-semibold'>Username</h1>
          <h2 className='text-detailslightgrey text-[14px] mb-6'>Full Name</h2>
          <ProfileItem text='Stuff' number='34' />
          <ProfileItem text='Stuff' number='34' />
          <ProfileItem text='Stuff' number='34' />
          <button className='text-customorange min-h-6 w-full text-center border-2 border-customlightorange rounded-[8px] mb-4 mt-6 py-2'>
            <span>View Public Profile</span>
          </button>
          <button className='text-detailsgrey min-h-6 w-full text-center border-2 border-bordergrey rounded-[8px] py-2'>
            <span>https://somelink.com</span>
          </button>
        </div>


        <div className='bg-white h-[534px] w-[70%] rounded-2xl px-6 py-[40px]'>
          

            <DetailsHeading headings={headings}/>
      
           
          <div>
          </div>      
        </div>


      </div>
    </div>
  );
};

export default Details;
