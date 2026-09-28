import React from 'react'

interface IProp{
    onClick: () => void;
    label: string;
    icon?: React.ReactNode; 
}
function Button({ label, onClick }: IProp) {
  return (
    <button onClick={() => onClick()} className='w-full h-12 rounded-full bg-black text-white'>
        {label}
    </button>
  )
}

export default Button