import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Card from "../Card/card"

const SliderAlt = ({sliderItems}) => {
  const [sliderRef] = useKeenSlider(
    {
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
        '(min-width: 976px)': {
          loop: true,
          mode: "free",
          slides: { origin: "center", perView: 2.5, spacing: 40 },
          range: {
            min: -5,
            max: 5,
          },
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
      {
        sliderItems.map((item, index) => (
          <Card key={index} desc={item.desc} className={`keen-slider__slide number-slide${index} border-4 border-figma-black sm:justify-center xl:max-w-xl`} />
        ))
      }
    </div>
  )
}

export default SliderAlt