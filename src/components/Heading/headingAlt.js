const HeadingAlt = ({children, className}) => {
  return (
    <h2 className={`
      text-[32px] font-bold
      sm:text-xl
      md:text-2xl
      lg:text-[32px]
      ${className}
    `}>
      {children}
    </h2>
  )
}

export default HeadingAlt