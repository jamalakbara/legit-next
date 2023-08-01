import React from 'react'

const Paragraph = ({children, className}) => {
  return (
    <p className={`
      text-figma-black text-xl ${className}
      sm:text-xs
      md:text-base
      lg:text-xl
    `}>
      {children}
    </p>
  )
}

export default Paragraph