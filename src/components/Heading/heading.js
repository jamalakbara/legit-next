import React from 'react'

const Heading = ({children, className}) => {
  return (
    <h1 className={`text-figma-black font-bold text-[62px] ${className}`}>
      {children}
    </h1>
  )
}

export default Heading