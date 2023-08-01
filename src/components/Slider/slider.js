import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

const images = [
  {
    src: '/img/coinbase.png',
    alt: 'coinbase',
  },
  {
    src: '/img/binance.png',
    alt: 'binance',
  },
  {
    src: '/img/gemini.png',
    alt: 'gemini',
  },
  {
    src: '/img/kraken.png',
    alt: 'kraken',
  },
  {
    src: '/img/pintu.png',
    alt: 'pintu',
  },
]

const Slider = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      breakpoints: {
        '(min-width: 375px)': {
          loop: true,
          slides: { origin: "center", perView: 2.5, spacing: 48 }
        },
      },
    },
  )

  return (
      <div ref={sliderRef} className="keen-slider">
        
        {images.map((image, idx) => (
          <div key={idx} className="keen-slider__slide flex items-center justify-center">
            <Image src={image.src} alt={image.alt} width={160} height={48} />
          </div>
        ))}

      </div>
  )
}

export default Slider