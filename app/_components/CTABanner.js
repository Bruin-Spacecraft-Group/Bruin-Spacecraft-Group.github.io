"use client";

import React from "react";
<<<<<<< HEAD
import Link from "next/link";
import Image from "next/image";
import MainButton from "./MainButton";
=======
import Link from 'next/link';
import Image from 'next/image'
import MainButton from './MainButton'
import SignUpFormReact from "./Newsletter";
>>>>>>> 15200cd5 (This might break things,)
// import AutoTyperNL from '../_components/AutoTyperNL';
// import WaitlistForm from '../_components/WaitlistForm';

export default function CTABanner() {
<<<<<<< HEAD
  return (
    <section className="py-10 md:py-14 h-96 px-10 lg:px-14">
      <div className="px-10 w-full h-full grid grid-cols-1 md:grid-cols-2 cta-bg rounded-[50px]">
        <div className="place-self-center">
          <h1 className="text-4xl text-center md:text-left font-light lg:text-10xl px-wrapper-mobile lg:px-wrapper-desktop lg:mt-0 hidden-br hidden-br--xl">
            Interested? <br></br>Join BruinSpace Today.
          </h1>
        </div>
        <div className="place-self-center">
          <div className="flex items-center justify-self-end">
            <Link href="/join" className="">
              <MainButton btn_txt="SIGN UP" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
=======
    return (
        <section className="py-10 md:py-14 h-96 px-10 lg:px-14">
            <div className='px-10 w-full h-full grid grid-cols-1 md:grid-cols-2 cta-bg rounded-[50px]'>
                <div className='place-self-center'>
                    <h1 className='text-4xl text-center md:text-left font-light lg:text-10xl px-wrapper-mobile lg:px-wrapper-desktop lg:mt-0 hidden-br hidden-br--xl'>
                        Interested? <br></br>Join the BruinSpace Newsletter Today.
                    </h1>
                </div>
                <div className='place-self-center'>
                    <div className='flex items-center justify-self-end'>
                        {/* <Link href="/join" className=''>
                        
                        </Link> */}
                        <SignUpFormReact></SignUpFormReact>
                    </div>
                </div>
            </div>
        </section>
    )
}
>>>>>>> 15200cd5 (This might break things,)
