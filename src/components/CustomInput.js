import React from 'react'

const CustomInput = ({title,type}) => {
  return (
    <div>
    <div className='text-detailslightgrey'>{title}</div>
    <input type={type} className='h-[42px] w-[368px] px-4 py-2.5 border-[1px] border-bordergrey'/>
  </div>
  )
}

export default CustomInput