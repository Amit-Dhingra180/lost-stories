import React, { useState } from 'react';

const Dropdown = ({title}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='text-black'>
        <div className='text-detailslightgrey'>{title}</div>
      <select
        value={selectedOption}
        onChange={handleChange}
        className='h-[42px] w-[368px] px-4 py-2.5 border-[1px] border-bordergrey appearance-none' style={{ backgroundImage: "url('/downArrow.png')",backgroundRepeat: 'no-repeat',backgroundPosition: 'right 0.75rem center',
            backgroundSize: '1rem' }}>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
    </div>
  );
};

export default Dropdown;
