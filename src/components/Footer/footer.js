import Logo from "../Logo/logo"
import Menu from "../Menu/menu"

const Footer = () => {
  return (
    <footer className="
      p-[120px] bg-figma-black
      sm:p-7
      md:p-14
      lg:p-[120px]
    ">
        <div className="
          flex justify-between items-center
          sm:flex-col sm:items-start sm:gap-7
          md:flex-row md:gap-14
        ">
            <Logo />

            <Menu />
        </div>

        <h2 className="
          text-2xl font-bold max-w-[823px]
          sm:text-xs sm:my-7
          md:text-base md:my-12
          lg:text-2xl lg:my-14
        ">
            Take control of your financial future and make informed tax decisions. Get started today!"
        </h2>

        <span className="
          text-xl
          sm:text-xs
          md:text-base
          lg:text-xl
        ">
            © 2023 Legite. All rights reserved.
        </span>
    </footer>
  )
}

export default Footer