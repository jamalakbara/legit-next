"use client";
import Card from '@/components/Card/card';
import Heading from '@/components/Heading/heading';
import Paragraph from '@/components/Paragraph/paragraph';
import SliderAlt from '@/components/Slider Alt/sliderAlt';
import Slider from '@/components/Slider/slider'
import Image from 'next/image';

const cards_about = [
  {
    number: 1,
    heading: 'Develop',
    desc: 'Develop a user-friendly website that serves as a centralized hub for accurate and up-to-date legal and tax information related to cryptocurrencies.'
  },
  {
    number: 2,
    heading: 'Provide',
    desc: 'Provide clear and easily understandable explanations of complex tax regulations, guidelines, and reporting requirements specific to digital assets, such as cryptocurrencies.'
  },
  {
    number: 3,
    heading: 'Update',
    desc: 'Regularly update the content to reflect any changes in tax laws and regulations to ensure investors have access to the latest information.'
  },
]

const cards_why = [
  {
    img: {
      src: '/img/cost.svg',
      alt: 'cost'
    },
    heading: 'Cost Savings',
    desc: 'The cost of hiring a tax accountant can be prohibitive for you. By using a website that provides tax services, you can save money on the cost of tax preparation. '
  },
  {
    img: {
      src: '/img/time.svg',
      alt: 'time'
    },
    heading: 'Time Savings',
    desc: 'By using a website that provides tax services, you can save yourself a significant amount of time and hassle. '
  },
  {
    img: {
      src: '/img/expertise.svg',
      alt: 'expertise'
    },
    heading: 'Expertise',
    desc: 'With team of experienced tax accountants who are familiar with cryptocurrency taxation'
  },
]

const cards_reviews = [
  {
    desc: 'as cryptocurrency investor, understanding the tax regulations was a nightmare until I found this platform'
  },
  {
    desc: '“Legite made filing my cryptocurrency taxes a breeze. They were knowledgeable, helpful, and affordable."'
  },
  {
    desc: 'Legite helped me save a lot of money on my cryptocurrency taxes. They were thorough and efficient.'
  },
  {
    desc: '“Legite has been an absolute game-changer for me as a cryptocurrency investor.”'
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col gap-14 items-start justify-center px-56 h-[80vh] bg-figma-purple bg-no-repeat bg-contain bg-right" style={
        {
          backgroundImage: "url('/img/hero-bg.png')",
        }
      }>
        <h1 className='text-7xl max-w-[50%]'>
        Simplify Your <b className="text-figma-yellow">Cryptocurrency</b> Taxes
        </h1>

        <p className='text-xl'>
        With a Trusted Tax Platform and Up-to-Date Legal Information
        </p>

        <button className="text-xl font-bold bg-figma-yellow flex justify-center items-center gap-2 py-6 px-8 rounded-3xl" style={
          {
            fontFamily: "Satoshi-Regular",
          }
        }>
          Get Started Now
        </button>
      </section>

      {/* Partners */}
      <section className="flex flex-col gap-14 items-center justify-center px-[120px] h-[20vh] bg-figma-white">
        <Slider />
      </section>

      {/* About */}
      <section className="flex flex-col gap-14 justify-center px-56 py-40  min-h-screen bg-figma-yellow bg-no-repeat bg-figma-right-top bg-figma" style={
        {
          backgroundImage: "url('/img/about-bg.png')",
        }
      }>
        <div className='flex flex-col gap-14 max-w-[50%]'>
          <Image src="/img/hub.svg" alt="hub" width={56} height={56} />
          
          <Heading>
            Centralized Tax Information Hub
          </Heading>

          <Paragraph>
            User-friendly website that serves as a centralized hub for accurate and up-to-date legal and tax information related to cryptocurrencies.
          </Paragraph>
        </div>

        <div className='flex gap-20 mt-40 items-stretch'>
          {
            cards_about.map((card, index) => (
              <Card key={index} {...card} />
            ))
          }
        </div>
      </section>

      {/* Why */}
      <section className="flex flex-col gap-14 justify-center px-56 py-40  min-h-screen bg-figma-purple bg-no-repeat bg-figma-left-bottom relative" style={
        {
          backgroundImage: "url('/img/why-bg.png')",
        }
      }>
        <div className='flex gap-8'>
          <Image src="/img/why.svg" alt="why" width={56} height={56} />

          <Heading className={'text-white'}>
            Why Legite?
          </Heading>
        </div>

        <div className='flex gap-12 mt-40 items-stretch'>
          {
            cards_why.map((card, index) => (
              <Card key={index} {...card} />
            ))
          }
        </div>

        <div className="absolute top-0 right-0">
          <Image src="/img/why-1.png" alt="why bg" width={160} height={100} />
        </div>
      </section>

      {/* Review */}

      <section className="flex flex-col gap-14 items-center justify-center py-40 bg-figma-yellow">
        <Heading>
          What they say about us
        </Heading>

        <SliderAlt sliderItems={cards_reviews} />
      </section>
    </>
  )
}
