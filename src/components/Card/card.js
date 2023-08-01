import Image from "next/image"
import Paragraph from "../Paragraph/paragraph"
import HeadingAlt from "../Heading/headingAlt"

const Card = ({img, heading, desc, number, className}) => {
  return (
    <div className={`
      text-figma-black p-14 flex flex-col gap-8 bg-white rounded-3xl relative flex-1 
      sm:p-7 sm:gap-4
      ${className}
    `}>
      {
        img && (
          <div className='
            flex flex-col w-12 h-12 relative 
            sm:w-6 sm:h-6
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
          <Paragraph className='
            sm:text-xs
          '>
            {desc}
          </Paragraph>
        )
      }

      {
        number && (
          <div className="
            absolute top-[-50px] left-[-50px] bg-figma-black rounded-full w-24 h-24 flex justify-center items-center text-white font-bold text-[32px]
            sm:top-[-10px] sm:left-[-10px] sm:w-10 sm:h-10 sm:text-xl
          ">
            {number}
          </div>
        )
      }
    </div>
  )
}

export default Card