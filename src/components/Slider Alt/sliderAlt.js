import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Card from "../Card/card"

const SliderAlt = ({sliderItems}) => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      '(min-width: 375px)': {
        loop: true,
        mode: "free",
        slides: { origin: "center", perView: 1.5, spacing: 20 },
        range: {
          min: -5,
          max: 5,
        },
      },
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      {
        sliderItems.map((item, index) => (
          <Card key={index} desc={item.desc} className={`keen-slider__slide number-slide${index} border-4 border-figma-black sm:justify-center`} />
        ))
      }
    </div>
  )
}

export default SliderAlt