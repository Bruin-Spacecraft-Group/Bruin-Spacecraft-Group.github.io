import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className='relative overflow-hidden pb-10 md:pb-14 mb-30 h-screen px-10 lg:px-24'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/projects/overseer.jpg' // TODO: replace with an Overseer-specific background, e.g. /overseer_bg.png
            width={400}
            height={400}
            alt="Overseer"
            className="op-dim object-cover object-center w-full h-full"
          />
        </div>
        {/* Overlay */}
          <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.5), rgba(0,0,0,0.05))',
        }}/>
        
        {/* Content */}
        <div className='relative flex flex-col justify-center h-full text-center'>
          <h1 className='z-20 mb-10 text-8xl lg:text-10xl px-wrapper-mobile font-thin lg:px-wrapper-desktop lg:mt-0 hidden-br hidden-br--xl'>
            Project Overseer
          </h1>
          <p className='text-xl z-20 font-extrabold lg:text-l px-wrapper-mobile lg:px-wrapper-desktop lg:mt-0 mb-2 lg:mb-7 hidden-br hidden-br--xl'>
            Hands-on Project Experience for New Engineers
          </p>
        </div>
      </section>

      


      {/* Overseer Description & Goals */}
      <section className="pb-10 md:pb-14 mt-40 mb-20 px-10 lg:px-24">
        <div className='grid grid-cols-9 max-md:grid-cols-1 gap-32 lg:gap-y-40 mb-10 place-items-center'>
          <div className="col-span-4 max-md:col-span-1">
            <div className="grid grid-cols-1 gap-6">
              <Image
                src="/projects/EAF-weather_balloon.jpg"
                alt="Weather Balloon"
                width={300}
                height={300}
                className="w-full  object-cover"
              />

              <Image
                src="/projects/EAF-overseer-workshop.jpg"
                alt="Rapid Render"
                width={300}
                height={300}
                className="w-full object-cover"
              />

              <Image
                src="/projects/EAF-happy.jpg"
                alt="Forge Project"
                width={300}
                height={300}
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className='col-span-5 max-md:col-span-1'>
            <div className='mb-20'>
              <h2 className='text-6xl text-highlight2 font-light'>Project Overseer</h2>
              <br />
              <p>
                Overseer is BruinSpace&apos;s high-altitude weather balloon project, designed
                to be accessible to new members. Overseer introduces students to mission design, hardware,
                and software through a series of structured flights. The project focuses
                on building a robust yet approachable platform for telemetry, tracking, and
                atmospheric sensing.
              </p>
            </div>
            <div>
              <h3 className='text-3xl'>Project Structure</h3>
              <br />
              <p>
                Overseer is split into a smaller mini-project and a
                full-scale weather balloon launch in the spring. The mini-project offers members an
                opportunity to collaborate with their new teams, gain experience with engineering fundamentals, and preview 
                the official balloon launch experience.
              </p>
              <p>
                Throughout the quarter, we offer lectures and workshops offering insights into: 
              </p>
              <br />
              <ul className='list-disc list-inside space-y-2'>
                <li>Intro-level electronics & soldering.</li>
                <li>Controls and embedded software.</li>
                <li>Structural design & FEA.</li>
                <li>Wireless communication.</li>
              </ul>
              <p>
                <br /><br />
                Bruinspace is not only for aerospace engineering students. Software, electrical, and other mechanical engineering are 
                crucial parts of any space mission. If you are interested in any of the above, apply now and become
                part of UCLA&apos;s next generation of engineers.
              </p>
            </div>
          </div>
        </div>
      </section>
        
        
      {/* Quick Overview / Characteristics */}
      <section className="pb-10 md:pb-14 mt-20 mb-20 px-10 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="rounded-2xl border border-zinc-700/40 p-6 lg:p-8 text-left">
            <h2 className="text-2xl md:text-3xl font-light mb-3">
              Build Core Skills
            </h2>
            <p className="text-lg text-light">
              Overseer is designed for students with little to no prior hardware experience.
              Members learn fundamentals step-by-step before touching flight hardware.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-700/40 p-6 lg:p-8 text-left">
            <h2 className="text-2xl md:text-3xl font-light mb-3">
              Hands-On Collaboration
            </h2>
            <p className="text-lg text-light">
              Work in tight-knit subteams on payload, software, and recovery.
              Everyone gets to build, test, and debug real systems together.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-700/40 p-6 lg:p-8 text-left">
            <h2 className="text-2xl md:text-3xl font-light mb-3">
              A Launchpad into Space Engineering
            </h2>
            <p className="text-lg text-light">
              Skills from Overseer feed directly into
              higher-complexity projects like Project Rapid and future careers in aerospace. 
            </p>
          </div>
        </div>
      </section>
     

      {/* Overall System / Flight Graphic */}
      <section className='pb-10 md:pb-10 mt-20 mb-20'>
        <Image
          src="/rapid_overall.png" // TODO: replace with Overseer-specific system diagram, e.g. /overseer_overall.png
          alt="Project Overseer System Overview"
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={3000}
          height={3000}
        />
      </section>

      {/* Leadership */}
      <section className="pb-10 md:pb-14 mt-20 mb-10 px-10 lg:px-24">
        <div className='relative flex flex-col justify-end h-full'>
          <p className='mb-10 text-2xl text-center lg:text-6xl font-thin px-wrapper-mobile lg:px-wrapper-desktop hidden-br hidden-br--xl'>
            Project Leadership
          </p>
          <br />
        </div>
        <div className='grid grid-cols-2 max-md:grid-cols-1 gap-10 lg:gap-12 mb-10 place-items-center'>
          <div>
            <Image
              src="/pictures/leadership/Ian.png"
              width={500}
              height={500}
              alt="Ian Lee - Project Manager"
            />
            <br />
            <p className='text-center'>
              <span className='font-semibold'>Ian Lee</span> <br /> Project Manager
            </p>
          </div>
          <div>
            <Image
              src="/pictures/leadership/Randall.png"
              width={500}
              height={500}
              alt="Randall Scharpf - Chief Engineer"
            />
            <br />
            <p className='text-center'>
              <span className='font-semibold'>Randall Scharpf</span> <br /> Chief Engineer
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
