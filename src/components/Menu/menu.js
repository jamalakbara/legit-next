import Link from "next/link"

const menu = [
    {
        name: "Solution",
        link: "/"
    },
    {
        name: "Benefit",
        link: "/"
    },
    {
        name: "Services",
        link: "/"
    }
]

const Menu = () => {
  return (
    <ul className="
        flex flex-row gap-4 justify-center items-center
        sm:text-xs
        md:text-base
        lg:text-xl
    ">
        {menu.map((item, index) => (
            <li key={index}>
                <Link href={item.link} style={
                    {
                        fontFamily: "Satoshi-Regular",
                    }
                }>
                    {item.name}
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default Menu