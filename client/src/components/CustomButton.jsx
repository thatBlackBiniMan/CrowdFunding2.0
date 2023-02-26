import React from 'react'

const CustomButton = ({btntype, title, handleclick, styles}) => {
  return (
    <div>
     <button type={btntype} className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`} 
     onClick={handleclick}>
      {title}
     </button>
    </div>
  )
}

export default CustomButton