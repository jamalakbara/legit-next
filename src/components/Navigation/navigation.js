import Logo from "../Logo/logo"
import Menu from "../Menu/menu"

const Navigation = () => {
  return (
    <nav className="
      grid grid-cols-3 h-[10vh] absolute w-full
      sm:px-7 sm:grid-cols-2 sm:gap-7
      md:px-14 md:grid-cols-3
      lg:px-[120px]
    ">
        <Logo />

        <Menu />
    </nav>
  )
}

export default Navigation