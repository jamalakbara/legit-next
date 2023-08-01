const Button = ({children, className}) => {
  return (
    <button className={`
      text-xl font-bold flex justify-center items-center gap-2 py-6 px-8 rounded-3xl 
      sm:text-xs sm:py-3 sm:px-4
      md:text-base md:py-4 md:px-6
      lg:text-xl lg:py-6 lg:px-8
      ${className}
    `} style={
      {
        fontFamily: "Satoshi-Regular",
      }
    }>
      {children}
    </button>
  )
}

export default Button