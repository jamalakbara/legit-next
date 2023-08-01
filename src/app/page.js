"use client";
import Card from '@/components/Card/card';
import Heading from '@/components/Heading/heading';
import Paragraph from '@/components/Paragraph/paragraph';
import SliderAlt from '@/components/Slider Alt/sliderAlt';
import Slider from '@/components/Slider/slider'
import Image from 'next/image';
import { cards_about, cards_reviews, cards_why, cards_services } from '@/lib/data';
import Button from '@/components/Button/button';
import HeadingAlt from '@/components/Heading/headingAlt';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="
        flex px-56 h-[80vh] bg-figma-purple bg-hero-bg bg-no-repeat bg-contain bg-right
        sm:px-7 sm:bg-rigth--50%
        md:px-14
      ">
        <div className='
          max-w-[50%] flex flex-col gap-14 items-start justify-center
          sm:max-w-full sm:gap-7
        '>
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
      <section className="
        flex flex-col gap-14 items-center justify-center px-[120px] h-[20vh] bg-figma-white
        sm:px-0
      ">
        <Slider />
      </section>

      {/* About */}
      <section className="
        flex flex-col gap-14 justify-center px-56 py-40  min-h-screen bg-figma-yellow bg-about-bg bg-no-repeat bg-right-top-100 bg-figma
        sm:p-7 sm:bg-50% sm:bg-right-top-250
      ">
        <div className='
          flex flex-col gap-14 max-w-[50%]
          sm:max-w-full sm:gap-7
        '>
          <div className='
            flex flex-col w-14 h-14 relative
            sm:w-7 sm:h-7
          '>
            <Image src="/img/hub.svg" alt="hub" fill style={
              {
                width: '100%',
                height: '100%',
              }
            } />
          </div>
          
          <Heading>
            Centralized Tax Information Hub
          </Heading>

          <Paragraph>
            User-friendly website that serves as a centralized hub for accurate and up-to-date legal and tax information related to cryptocurrencies.
          </Paragraph>
        </div>

        <div className='
          flex gap-20 mt-40 items-stretch
          sm:gap-7 sm:mt-7 sm:flex-col sm:items-center
        '>
          {
            cards_about.map((card, index) => (
              <Card key={index} {...card} />
            ))
          }
        </div>
      </section>

      {/* Why */}
      <section className="
        flex flex-col gap-14 justify-center px-56 py-40  min-h-screen bg-no-repeat bg-figma-purple bg-[url('/img/why-bg.png'),_url('/img/why-1.png')] bg-[position:left_bottom_100px,_right_top]
        sm:p-7
      " 
      >
        <div className='
          flex items-center gap-8
          sm:gap-4
        '>
          <div className='
            flex flex-col w-14 h-14 relative
            sm:w-7 sm:h-7
          '>
            <Image src="/img/why.svg" alt="why" fill style={
              {
                width: '100%',
                height: '100%',
              }
            } />
          </div>

          <Heading className={'text-white'}>
            Why Legite?
          </Heading>
        </div>

        <div className='
          flex gap-12 mt-40 items-stretch
          sm:gap-7 sm:mt-7 sm:flex-col sm:items-center
        '>
          {
            cards_why.map((card, index) => (
              <Card key={index} {...card} />
            ))
          }
        </div>
      </section>

      {/* Review */}

      <section className="
        flex flex-col gap-14 items-center justify-center py-40 bg-figma-yellow
        sm:py-7
      ">
        <Heading className='px-7 text-center'>
          What they say about us
        </Heading>

        <SliderAlt sliderItems={cards_reviews} />
      </section>

      {/* Service */}
      <section className="
        flex flex-col gap-40 justify-center px-56 py-40 min-h-screen bg-no-repeat bg-figma-purple bg-[url(/img/bulet.svg),_url(/img/kotak.svg)] bg-[position:right_top_100px,_left_bottom_100px]
        sm:p-7 sm:bg-[url(/img/bulet.svg),_url(/img/kotak.svg)] sm:bg-[position:right_top_50px,_left_bottom_50px] bg-50% sm:gap-20
      ">
          <Heading className={'text-white'}>
            Our Services
          </Heading>

          <div className='
            flex flex-col gap-14
            sm:gap-7
          '>
            {
              cards_services.map((card, index) => (
                <Card key={index} {...card} />
              ))
            }
          </div>

      </section>

      {/* CTA */}
      <section className="
        flex flex-col gap-14 items-center justify-center px-[120px] py-40 bg-figma-purple
        sm:p-7 sm:gap-7
      ">

        <div className='
          flex flex-col gap-12 items-center p-14 text-center rounded-[48px] bg-no-repeat bg-figma-yellow bg-[url(/img/cta-1.svg),_url(/img/cta-2.svg)] bg-[position:left_top,_right_bottom]
          sm:p-7 sm:gap-7
        '>
          <HeadingAlt className='text-figma-black'>
            Take Control of Your Cryptocurrency Taxes Today!
          </HeadingAlt>

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
