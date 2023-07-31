const Button = ({children, className}) => {
  return (
    <button className={`text-xl font-bold flex justify-center items-center gap-2 py-6 px-8 rounded-3xl ${className}`} style={
      {
        fontFamily: "Satoshi-Regular",
      }
    }>
      {children}
    </button>
  )
}

export default Button