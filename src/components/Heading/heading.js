import React from 'react'

const Heading = ({children, className}) => {
  return (
    <h1 className={
      `text-figma-black font-bold text-[62px] 
      sm:text-3xl
      md:text-[48px] md:leading-[58px]
      lg:text-[62px] lg:leading-[72px]
      ${className}`}>
      {children}
    </h1>
  )
}

export default Heading