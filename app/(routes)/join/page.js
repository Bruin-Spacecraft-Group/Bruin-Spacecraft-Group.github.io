import React from "react";
import Image from "next/image";
import Link from "next/link";
import MainButton2 from "@/app/_components/MainButton2";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden pb-10 md:pb-14 mb-30 h-screen px-10 lg:px-24">
        <div className="absolute inset-0">
          <Image
            src="/projects/rapid.JPG"
            width={4000}
            height={4000}
            alt="Rapid in Space"
            className="op-dim object-cover object-center w-full h-full"
          ></Image>
        </div>
        <div className="relative flex flex-col justify-center h-full text-center">
          <h1 className="mb-10 text-8xl lg:text-10xl px-wrapper-mobile font-thin lg:px-wrapper-desktop lg:mt-0 hidden-br hidden-br--xl">
            Join BruinSpace Today
          </h1>
          <h3 className="text-xl text-light font-extrabold lg:text-l px-wrapper-mobile lg:px-wrapper-desktop lg:mt-0 mb-2 lg:mb-7 hidden-br hidden-br--xl">
            Learn how you can be a member!
          </h3>
        </div>
      </section>
      <section>
        <div className="justify-self-center mt-10 text-xl">
          Interested? Fill out this Google Form
        </div>
        <div className="justify-self-center mt-5">
          <Link
            href="https://forms.gle/CEivWDPXAMj4EqwX8"
            target="_blank"
            className=""
          >
            <MainButton2 btn_txt="APPLY HERE" />
          </Link>
        </div>
        <hr className="my-10 mx-80 text-light opacity-50" />
        <div className="text-6xl ml-10">Which Program is Right for you?</div>
        <div className="flex items-center justify-center bg-gray-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 max-md:grid-cols-1 gap-40 mx-40 max-w-screen-2xl">
            {/* Box 1 */}
            <div className="shadow-lg rounded-lg overflow-hidden border-y-8 border-highlight3 flex flex-col min-w-60">
              <div className="p-4">
                <h2 className="text-xl font-bold text-white text-center mb-4">
                  Overseer
                </h2>
              </div>
              <Image
                src="/projects/overseer.JPG" // Replace with your image
                alt="Overseer"
                width={500}
                height={300}
                style={{
                  width: "100%",
                  height: "50%",
                }}
                className="object-cover w-full"
              />
              <div className="p-6">
                <p className="text-white">
                  Introductory project to introduce fundamental engineering
                  concepts, skills, and experience towards space sciences and
                  technology. Open to everyone.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="shadow-lg rounded-lg overflow-hidden border-y-8 border-highlight4 flex flex-col min-w-60">
              <div className="p-4">
                <h2 className="text-xl font-bold text-white text-center mb-4">
                  Rapid
                </h2>
              </div>
              <Image
                src="/projects/rapid2.JPG" // Replace with your image
                alt="Rapid"
                width={500}
                height={300}
                style={{
                  width: "100%",
                  height: "50%",
                }}
                className="object-cover w-full"
              />
              <div className="p-6">
                <p className="text-white">
                  Development of a 3U CubeSat (very small space satellite) to
                  demonstrate the functionality of an experimental ion thruster
                  (electric propulsion unit, as the payload). Application-based.
                  Recommended to have basic knowledge and experience for area of
                  expertise applying to.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="shadow-lg rounded-lg overflow-hidden border-y-8 border-highlight2 flex flex-col min-w-60">
              <div className="p-4">
                <h2 className="text-xl font-bold text-white text-center mb-4">
                  Forge
                </h2>
              </div>
              <Image
                src="/projects/forge.JPG" // Replace with your image
                alt="Forge"
                width={500}
                height={300}
                style={{
                  width: "100%",
                  height: "50%",
                }}
                className="object-cover w-full"
              />
              <div className="p-6">
                <p className="text-white">
                  The goal of forge is for professional and career development
                  of the UCLA community through Company Info Sessions,
                  Professional Speakers, Career Fairs, and more. Anyone can get
                  involved, just join the{" "}
                  <Link
                    href="https://discord.gg/FWmffUYwaX"
                    target="_blank"
                    className="cursor-pointer text-highlight hover:underline"
                  >
                    Discord
                  </Link>{" "}
                  to stay updated!
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-10 mx-80 text-light opacity-50" />
        <div className="text-6xl ml-10">Questions?</div>
        <li className="text-lg ml-16 mt-5">
          To find more resources in BruinSpace, check out our{" "}
          <Link
            href="https://linktr.ee/uclabruinspace"
            target="_blank"
            className="cursor-pointer text-highlight hover:underline"
          >
            Linktree
          </Link>
          .
        </li>
        <li className="text-lg ml-16 mt-5">
          Ask an admin officer or project manager in our{" "}
          <Link
            href="https://discord.gg/FWmffUYwaX"
            target="_blank"
            className="cursor-pointer text-highlight hover:underline"
          >
            Discord
          </Link>{" "}
          server.
        </li>
      </section>
    </main>
  );
}
