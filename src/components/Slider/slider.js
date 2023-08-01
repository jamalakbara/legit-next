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
        '(min-width: 100px)': {
          loop: true,
          slides: { origin: "center", perView: 2.5, spacing: 48 }
        },
        '(min-width: 768px)': {
          loop: true,
          slides: { origin: "center", perView: 3.5, spacing: 48 }
        },
        '(min-width: 976px)': {
          slides: { perView: 5, spacing: 48 }
        },
      },
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
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