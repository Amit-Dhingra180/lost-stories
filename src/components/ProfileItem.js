import React from 'react'

const ProfileItem = ({text,number}) => {
  return (
    <div className='flex justify-between text-detailsgrey text-[14px] w-full border-b-[1px] border-bordergrey mb-4 p-1'>
          <span>{text}</span>
          <span className='text-detailslightgrey'>{number}</span>
        </div>
  )
}

export default ProfileItem