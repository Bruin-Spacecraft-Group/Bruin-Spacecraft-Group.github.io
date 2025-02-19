'use client'

import React from "react";
import Link from 'next/link';
import Image from 'next/image'
import MainButton from './MainButton'
import { SiLinkedin, SiInstagram, SiX } from "react-icons/si";


export default function MainFooter() {
    return (
        <nav className="container mx-auto min-w-full z-40">
            <div className="relative bottom-0 left-0 right-0 px-10 lg:px-24 py-12 z-39 bg-bg2 text-bg">
                <div className='grid grid-cols-6 max-md:grid-cols-1 gap-x-6 max-md:gap-y-8 justify-between justify-items-stretch content-start'>
                    <div className='max-md:justify-self-center content-center'>
                        <Link href="/">
                            <Image
                                src="SM - LightSVG.svg"
                                alt="BruinSpace Icon Logo"
                                sizes="100vw"
                                style={{
                                    width: '45px',
                                    height: '45px',
                                }}
                                width={45}
                                height={45}
                            />
                        </Link>
                    </div>
                    <div className='max-md:hidden'></div>
                    <div className='max-md:hidden'></div>
                    <div className='grid items-top justify-between justify-items-stretch gap-6 content-start justify-self-end max-md:justify-self-center'>
                        <Link className="hover:underline hover:decoration-highlight" href="/about">
                            ABOUT
                        </Link>
                    </div>
                    <div className='grid items-top justify-between justify-items-stretch gap-6 content-start justify-self-end max-md:justify-self-center'>
                        <Link className="hover:underline hover:decoration-highlight" href="/projects">
                            PROJECTS
                        </Link>
                    </div>
                    <div className='grid items-top justify-between justify-items-stretch gap-6 content-start justify-self-end max-md:justify-self-center'>
                        <Link className="hover:underline hover:decoration-highlight" href="/partnerships">
                            PARTNERSHIPS
                        </Link>
                    </div>
                </div>
                <div className='mt-16 grid grid-cols-2 max-md:grid-cols-1 gap-x-6 max-md:gap-y-8 items-end text-light'>
                    <div className='justify-self-start max-md:justify-self-center'>
                        <p className='max-md:text-center'>Bruin Spacecraft Group. <br/>A UCLA student organization.</p>
                    </div>
                    <div className='flex flex-row justify-self-end max-md:justify-self-center pb-1'>
                        <Link href="https://x.com/uclabruinspace" target="_blank" className='ml-6'><SiX /></Link>
                        <Link href="https://www.linkedin.com/company/bruin-spacecraft-group-at-ucla/" target="_blank" className='ml-6'><SiLinkedin /></Link>
                        <Link href="https://www.instagram.com/uclabruinspace/" target="_blank" className='ml-6'><SiInstagram /></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}