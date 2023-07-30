import Logo from "../Logo/logo"
import Menu from "../Menu/menu"

const Footer = () => {
  return (
    <footer className="p-[120px] bg-[#373737]">
        <div className="flex justify-between items-center">
            <Logo />

            <Menu />
        </div>

        <h2 className="text-2xl font-bold max-w-[823px] my-12">
            Take control of your financial future and make informed tax decisions. Get started today!"
        </h2>

        <span className="text-xl">
            2023 Legite. All rights reserved.
        </span>
    </footer>
  )
}

export default Footer