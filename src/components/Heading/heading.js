import React from 'react'

const Heading = ({children, className}) => {
  return (
    <h1 className={
      `text-figma-black font-bold text-[62px] 
      sm:text-3xl
      md:text-[48px] md:leading-[58px]
      ${className}`}>
      {children}
    </h1>
  )
}

export default Heading