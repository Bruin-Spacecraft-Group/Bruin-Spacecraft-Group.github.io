import React from "react";
import Link from "next/link";
import Image from "next/image";
import Timeline from "../../_components/Timeline";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden pb-10 md:pb-14 mb-30 h-screen px-10 lg:px-24">
        <div className="absolute inset-0">
          <Image
            src="/rapid_bg.png"
            width={4000}
            height={4000}
            alt="Rapid in Space"
            className="op-dim object-cover object-center w-full h-full"
          ></Image>
        </div>
        <div className="relative flex flex-col justify-center h-full text-center">
          <h1 className="mb-10 text-8xl lg:text-10xl px-wrapper-mobile font-thin lg:px-wrapper-desktop lg:mt-0 hidden-br hidden-br--xl">
            Project Rapid
          </h1>
          <p className="text-xl text-light font-extrabold lg:text-l px-wrapper-mobile lg:px-wrapper-desktop lg:mt-0 mb-2 lg:mb-7 hidden-br hidden-br--xl">
            BruinSpace's flagship CubeSat development project
          </p>
        </div>
      </section>
      <section className="pb-10 md:pb-14 mt-40 mb-20 px-10 lg:px-24">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-32 lg:gap-y-40 mb-10 text-center text-6xl font-thin">
          <p>2U Bus | 1U Payload</p>
          <p>130W, 28Wh 12V</p>
          <p>Orientation Control</p>
          <p>4 Fixed Solar Arrays</p>
          <p>2s3p Li-ion Battery</p>
          <p>UHF Communication</p>
        </div>
      </section>
      <section className="pb-10 md:pb-14 mt-40 mb-20 px-10 lg:px-24">
        <div className="grid grid-cols-9 max-md:grid-cols-1 gap-32 lg:gap-y-40 mb-10 place-items-center">
          <div className="col-span-4 max-md:col-span-1">
            <Image
              src="/cubsat_render.png"
              alt="Rapid Render"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={3000}
              height={3000}
            />
          </div>
          <div className="col-span-5 max-md:col-span-1">
            <div className="mb-20">
              <h2 className="text-6xl text-highlight2 font-light">RAPID-0</h2>
              <br />
              <p>
                RAPID-0 is a 3U cubesat, currently being developed by the
                Project Rapid team. It will be Project Rapid’s first satellite
                launched into space and the predecessor to future satellites
                capable of carrying high-power, high-volume, pointing-requiring
                payloads. RAPID-0's design is based on engineering development
                for RAPID-1, and carries over much of the custom technology
                developed for its ion thruster.
              </p>
            </div>
            <div>
              <h3 className="text-3xl">Satelite Goals</h3>
              <br />
              <p>
                RAPID-0 seeks to increase the TRL of a high-power, high-volume,
                pointing-capable testbed. Giving these systems flight heritage
                will contribute to confidence and reliability for future
                payloads. Significant expererimental technologies of which
                RAPID-0 aims to increase the TRL include:
              </p>
              <br />
              <li>
                Full ADCS (Attitude Determination & Control Systems) module.
              </li>
              <li>Deployable antenna.</li>
              <li>12V high-power converter.</li>
              <li>High-current battery pack.</li>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-10 md:pb-14 mt-20 mb-10 px-10 lg:px-24">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 lg:gap-12 mb-10 place-items-center">
          <div>
            <h2 className="text-6xl font-light">Timeline</h2>
            <br />
            <br />
            <p>
              {" "}
              BruinSpace has developed significantly since the creation of
              Project Rapid, with the goal of providing high quality enginereing
              experience for efficient design, prototyping, and manufacturing.{" "}
              <br />
              <br /> Our lab has worked to create a full soldering station,
              ESD-protected storage and workbenches, lab computers, 3D-printers,
              spot-welder, plenty of hardware tool kits, machinery tools, and
              more in order to achieve our goals punctually. We've also grown
              organizationally, with developed standards, tools, practices, and
              resources for our members.{" "}
            </p>
          </div>
          <Timeline />
        </div>
      </section>
      <section className="pb-10 md:pb-10 mt-20 mb-20">
        <Image
          src="/rapid_overall.png"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={3000}
          height={3000}
        />
      </section>
      <section className="pb-10 md:pb-14 mt-20 mb-10 px-10 lg:px-24">
        <div className="relative flex flex-col justify-end h-full">
          <p className="mb-10 text-2xl text-center lg:text-6xl font-thin px-wrapper-mobile lg:px-wrapper-desktop hidden-br hidden-br--xl">
            Project Leadership
          </p>
          <br />
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 lg:gap-12 mb-10 place-items-center">
          <div>
            <Image
              src="/pictures/leadership/Ian.png"
              width={500}
              height={500}
              alt="Ian Lee - Project Manager"
            />
            <br />
            <p className="text-center">
              {" "}
              <span className="font-semibold">Ian Lee</span> <br /> Project
              Manager
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
            <p className="text-center">
              {" "}
              <span className="font-semibold">Randall Scharpf</span> <br />{" "}
              Chief Engineer
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
