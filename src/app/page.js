"use client";
import Card from '@/components/Card/card';
import Heading from '@/components/Heading/heading';
import Paragraph from '@/components/Paragraph/paragraph';
import SliderAlt from '@/components/Slider Alt/sliderAlt';
import Slider from '@/components/Slider/slider'
import Image from 'next/image';
import { cards_about, cards_reviews, cards_why } from '@/lib/data';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="flex px-56 h-[80vh] bg-figma-purple bg-no-repeat bg-contain bg-right" style={
        {
          backgroundImage: "url('/img/hero-bg.png')",
        }
      }>
        <div className='max-w-[50%] flex flex-col gap-14 items-start justify-center'>
          <Heading className='text-white'>
            Simplify Your <b className="text-figma-yellow">Cryptocurrency</b> Taxes
          </Heading>

          <Paragraph className='text-white'>
            With a Trusted Tax Platform and Up-to-Date Legal Information
          </Paragraph>

          <button className="text-xl font-bold bg-figma-yellow flex justify-center items-center gap-2 py-6 px-8 rounded-3xl" style={
            {
              fontFamily: "Satoshi-Regular",
            }
          }>
            Get Started Now
          </button>
        </div>
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
