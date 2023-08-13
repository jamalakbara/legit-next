import Image from "next/image"
import Paragraph from "../Paragraph/paragraph"
import HeadingAlt from "../Heading/headingAlt"

const Card = ({img, heading, desc, number, className}) => {
  return (
    <div className={`
      text-figma-black p-14 flex flex-col gap-8 bg-white rounded-3xl relative flex-1  w-full
      sm:p-7 sm:gap-4
      md:p-10 md:gap-6
      lg:p-14 lg:gap-8
      ${className}
    `}>
      {
        img && (
          <div className='
            flex flex-col w-12 h-12 relative 
            sm:w-6 sm:h-6
            md:w-8 md:h-8
            lg:w-12 lg:h-12
          '>
            <Image src={img.src} alt={img.alt} fill style={
              {
                width: '100%',
                height: '100%',
              }
            } />
          </div>
        )
      }

      {
        heading && (
          <HeadingAlt>
            {heading}
          </HeadingAlt>
        )
      }

      {
        desc && (
          <Paragraph>
            {desc}
          </Paragraph>
        )
      }

      {
        number && (
          <div className="
            absolute top-[-50px] left-[-50px] bg-figma-black rounded-full w-24 h-24 flex justify-center items-center text-white font-bold text-[32px]
            sm:top-[-10px] sm:left-[-10px] sm:w-10 sm:h-10 sm:text-xl
            md:w-14 md:h-14 md:text-2xl md:top-[-20px] md:left-[-20px]
            lg:w-24 lg:h-24 lg:text-[32px] lg:top-[-50px] lg:left-[-50px]
          ">
            {number}
          </div>
        )
      }
    </div>
  )
}

export default Card