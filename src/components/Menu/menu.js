"use client";
import Link from "next/link"
import { menu } from '@/lib/data';

const Menu = () => {
    const handleClick = (sectionId) => (e) => {
        e.preventDefault();
        const section = document.querySelector(sectionId);
        const offsetTop = section.offsetTop;
    
        window.scroll({
          top: offsetTop,
          behavior: 'smooth',
        });
      };

    return (
        <ul className="
            flex flex-row gap-4 justify-center items-center
            sm:text-xs
            md:text-base
            lg:text-xl
        ">
            {menu.map((item, index) => (
                <li key={index} onClick={handleClick(item.link)} className="cursor-pointer">
                    <a onClick={handleClick(item.link)} style={
                        {
                            fontFamily: "Satoshi-Regular",
                        }
                    }>
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Menu