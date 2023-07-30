import Logo from "../Logo/logo"
import Menu from "../Menu/menu"

const Navigation = () => {
  return (
    <nav className="grid grid-cols-3 px-[120px] h-[10vh] absolute w-full">
        <Logo />

        <Menu />
    </nav>
  )
}

export default Navigation