"use client";
import Card from '@/components/Card/card';
import Heading from '@/components/Heading/heading';
import Paragraph from '@/components/Paragraph/paragraph';
import SliderAlt from '@/components/Slider Alt/sliderAlt';
import Slider from '@/components/Slider/slider'
import Image from 'next/image';
import { cards_about, cards_reviews, cards_why, cards_services } from '@/lib/data';
import Button from '@/components/Button/button';

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

          <Button className={'bg-figma-yellow'}>
            Get Started Now
          </Button>
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
      <section className="flex flex-col gap-14 justify-center px-56 py-40  min-h-screen" style={
        {
          background: "url('/img/why-bg.png') no-repeat left bottom 100px, url('/img/why-1.png') no-repeat right top, #5E17EB",
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
      </section>

      {/* Review */}

      <section className="flex flex-col gap-14 items-center justify-center py-40 bg-figma-yellow">
        <Heading>
          What they say about us
        </Heading>

        <SliderAlt sliderItems={cards_reviews} />
      </section>

      {/* Service */}
      <section className="flex flex-col gap-40 justify-center px-56 py-40 min-h-screen" style={
        {
          background: 'url(/img/bulet.svg) right top 100px no-repeat, url(/img/kotak.svg) left bottom 100px no-repeat, #5E17EB'
        }
      }>
          <Heading className={'text-white'}>
            Our Services
          </Heading>

          <div className='flex flex-col gap-14'>
            {
              cards_services.map((card, index) => (
                <Card key={index} {...card} />
              ))
            }
          </div>

      </section>

      {/* CTA */}
      <section className="flex flex-col gap-14 items-center justify-center px-[120px] py-40 bg-figma-purple">

        <div className='bg-figma-yellow flex flex-col gap-12 items-center p-14 rounded-[48px]' style={
          {
            background: 'url(/img/cta-2.svg) right bottom no-repeat, url(/img/cta-1.svg) left top no-repeat, #FFBD59'
          }
        }>
          <h1 className="text-figma-black font-bold text-[32px]">
          Take Control of Your Cryptocurrency Taxes Today!
          </h1>

          <Paragraph>
          Start maximizing your cryptocurrency investment returns while ensuring tax compliance.
          </Paragraph>

          <Button className={'bg-figma-purple'}>
            Get Started Now
          </Button>
        </div>
      </section>
    </>
  )
}
