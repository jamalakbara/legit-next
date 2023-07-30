import React from 'react'

const Paragraph = ({children, className}) => {
  return (
    <p className={`text-figma-black text-xl ${className}`}>
      {children}
    </p>
  )
}

export default Paragraph