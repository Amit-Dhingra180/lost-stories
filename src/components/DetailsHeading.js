import React from 'react'
import { useState } from 'react';

const DetailsHeading = ({headings}) => {

  const [selectedSpan, setSelectedSpan] = useState(0);

  const handleClick = (index) => {
    setSelectedSpan(index);
  }

  return (
    <div className='font-nunito flex justify-around w-full h-[44px] border-b-[1px] border-bordergrey'>

      {headings.map((heading, index) => (
        <span
          key={index}
          className={`cursor-pointer ${selectedSpan === index ? 'text-orange-500 border-b-[1px] border-customorange' : 'text-detailslightgrey'}`}
          onClick={() => handleClick(index)}
        >
          {heading}
        </span>
      ))}
    </div>
  )
}

export default DetailsHeading