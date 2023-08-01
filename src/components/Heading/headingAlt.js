const HeadingAlt = ({children, className}) => {
  return (
    <h2 className={`
      text-[32px] font-bold
      sm:text-xl
      ${className}
    `}>
      {children}
    </h2>
  )
}

export default HeadingAlt