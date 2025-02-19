import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import SignUpFormReact from '../_components/Newsletter';

export default function Home() {
  return (
    <main>
      <section className='relative overflow-hidden pb-10 md:pb-14 mb-20 h-screen px-10 lg:px-24'>
        <div className='absolute inset-0'>
          <video
            src='/webvideo.mp4'
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="op-dim object-cover object-center w-full h-full"
          ></video>
        </div>
        <div className='relative flex flex-col justify-end h-full'>
          <h1 className='mb-10 text-7xl lg:text-10xl font-light px-wrapper-mobile lg:px-wrapper-desktop lg:mt-0 md:w-9/12 lg:w-8/12 2xl:w-7/12 hidden-br hidden-br--xl'>
            Creating Future Space Leaders
          </h1>
          <p className='text-xl text-light font-extrabold lg:text-l px-wrapper-mobile lg:px-wrapper-desktop lg:mt-0 mb-2 lg:mb-7 md:w-9/12 lg:w-8/12 2xl:w-7/12 hidden-br hidden-br--xl'>
            Bruin Spacecraft Group at UCLA
          </p>
        </div>
      </section>
      <section className="pb-10 md:pb-14 mb-10 px-10 lg:px-24">
        <div className="grid grid-cols-6 max-md:grid-cols-1 gap-6 lg:gap-16 mb-10">
          <div className="col-span-1">
            <p className='font-extrabold'>Our Mission</p>
          </div>
          <div className="col-span-5">
            <p className='font-extralight text-xl lg:text-2xl'>Bruin Spacecraft Group was founded with the intent of providing a creative and supportive environment for space mission design and development at UCLA. Here, students of all backgrounds can come together, united by a passion for space, to do something amazing. Here, we aim to give students the opportunity to acquire the skills necessary to become leaders in the space industry.</p>
          </div>
        </div>
        <div className='pb-10'>
          <p className='font-extrabold'>Backed By</p>
        </div>
        <div className="grid grid-cols-5 max-md:grid-cols-1 gap-12 lg:gap-16">
          <Image
            src="/partnerships/lockheed.png"
            width={500}
            height={500}
            alt="Lockheed Martin"
          />
          <Image
            src="/partnerships/mathworks.png"
            width={500}
            height={500}
            alt="Mathworks"
          />
          <Image
            src="/partnerships/northrop.png"
            width={500}
            height={500}
            alt="Northrop Grumman"
          />
          <Image
            src="/partnerships/millenium.png"
            width={500}
            height={500}
            alt="Millennium Space"
          />
          <Image
            src="/partnerships/ucla-samu.png"
            width={500}
            height={500}
            alt="Millennium Space"
          />
        </div>
      </section>
      <section className="pb-10 md:pb-14 h-96 rapid-bg px-10 lg:px-24">
        <div className='grid w-full h-full place-content-center'>
          <Link href="/rapid">
            <Image
              src="/projects/rapid_logo.png"
              alt="Rapid Logo"
              style={{
                width: 'auto',
                height: '225px',
              }}
              width={300}
              height={300}
            />
            <p className='text-xl text-[#c64242] text-center'>CUBESAT DEVELOPMENT</p>
          </Link>
        </div>
      </section>
      <section className="pb-10 md:pb-14 h-96 overseer-bg">
        <div className='grid w-full h-full place-content-center'>
          <Link href="/">
            <Image
              src="/projects/overseer_logo.png"
              alt="Overseer Logo"
              style={{
                width: 'auto',
                height: '225px',
              }}
              width={300}
              height={300}
            />
            <p className='text-xl text-[#50d4ec] text-center'>HIGH-ALTITUDE BALLOONS</p>
          </Link>
        </div>
      </section>
      <section className="pb-10 md:pb-14 h-96 forge-bg">
        <div className='grid w-full h-full place-content-center'>
          <Link href="/">
            <Image
              src="/projects/forge_logo.PNG"
              alt="Forge Logo"
              style={{
                width: 'auto',
                height: '225px',
              }}
              width={300}
              height={300}
            />
            <p className='text-xl text-[#e1ec50] text-center'>CAREER PROGRAM</p>
          </Link>
        </div>
      </section>


    </main >
  )
}
