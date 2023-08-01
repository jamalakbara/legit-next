import Logo from "../Logo/logo"
import Menu from "../Menu/menu"

const Footer = () => {
  return (
    <footer className="
      p-[120px] bg-figma-black
      sm:p-7
    ">
        <div className="
          flex justify-between items-center
          sm:flex-col sm:items-start sm:gap-7
        ">
            <Logo />

            <Menu />
        </div>

        <h2 className="
          text-2xl font-bold max-w-[823px] my-12
          sm:text-xs sm:my-7
        ">
            Take control of your financial future and make informed tax decisions. Get started today!"
        </h2>

        <span className="
          text-xl
          sm:text-xs
        ">
            © 2023 Legite. All rights reserved.
        </span>
    </footer>
  )
}

export default Footer