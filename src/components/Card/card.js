import Image from "next/image"
import Paragraph from "../Paragraph/paragraph"

const Card = ({img, heading, desc, number, className}) => {
  return (
    <div className={`text-figma-black p-14 flex flex-col gap-8 bg-white rounded-3xl relative flex-1 ${className}`}>
      {
        img && (
          <Image src={img.src} alt={img.alt} width={46} height={46} />
        )
      }

      {
        heading && (
          <h2 className='text-[32px] font-bold'>
            {heading}
          </h2>
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
          <div className="absolute top-[-50px] left-[-50px] bg-figma-black rounded-full w-24 h-24 flex justify-center items-center text-white font-bold text-[32px]">
            {number}
          </div>
        )
      }
    </div>
  )
}

export default Card