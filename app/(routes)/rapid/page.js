import React from "react";
import Link from "next/link";
import Image from "next/image";
import Timeline from "../../_components/Timeline";

export default function Home() {
  return (
    <main>
      {/* BANNER */}
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
      {/* RAPID-0 */}
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
      <hr className="my-10 mx-80 text-light opacity-50" />
      {/* TECH SPECS */}
      <section className="pb-10 md:pb-14 mt-40 mb-20 px-10 lg:px-24">
        <p className="text-center text-6xl">Tech Specs</p>
        <hr className="my-8 mb-20 justify-self-center w-1/4 text-light opacity-50" />
        <div className="flex flex-col gap-16 lg:gap-y-16 mb-10 text-center text-6xl font-thin">
          {/* Row 1 */}
          <div className="mt-16">Full Orientation Control</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <Image
                src="/rapid/adcs.png"
                alt="ADCS Actuator and Sensor Module"
                style={{
                  width: "50%",
                  height: "auto",
                  justifySelf: "center",
                  margin: 0,
                }}
                width={3000}
                height={3000}
              />
              <p className="text-xl">ADCS Actuator and Sensor Module</p>
            </div>
            <div className="border-l-2 border-light opacity-50 h-full mx-4 flex items-center">
              <div className="text-left ml-10 text-4xl">
                <li>2U Bus | 1U Payload</li>
                <li>4X reaction wheels, 3X magnetorquers</li>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="mt-16">Support for High Power Payloads</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <Image
                src="/rapid/batterypack.png"
                alt="Battery Pack"
                style={{
                  width: "50%",
                  height: "auto",
                  justifySelf: "center",
                  margin: 0,
                }}
                width={3000}
                height={3000}
              />
              <p className="text-xl">Battery Pack</p>
            </div>
            <div className="border-l-2 border-light opacity-50 h-full mx-4 flex items-center">
              <div className="text-left ml-10 text-4xl">
                <li>130W, 28Wh 12V</li>
                <li>2s3p Li-ion Battery</li>
                <li>4 Fixed Solar Arrays</li>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="mt-16">Communication</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <Image
                src="/rapid/commsunit.png"
                alt="Comms Unit Antenna"
                style={{
                  width: "50%",
                  height: "auto",
                  justifySelf: "center",
                  margin: 0,
                }}
                width={3000}
                height={3000}
              />
              <p className="text-xl">Comms Unit Antenna</p>
            </div>
            <div className="border-l-2 border-light opacity-50 h-full mx-4 flex items-center">
              <div className="text-left ml-10 text-4xl">
                <li>UHF communication</li>
                <li>Custom bent dipole antenna</li>
              </div>
            </div>
          </div>

          {/* Row 4 */}
          {/* <div className="mt-16">Large Payload Volume</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <Image
                src="/rapid/flatsat1.jpg"
                alt="Satellite Chassis"
                style={{
                  width: "40%",
                  height: "auto",
                  justifySelf: "center",
                  margin: 0,
                }}
                width={3000}
                height={3000}
              />
              <p className="text-xl">Satellite Chassis</p>
            </div>
            <div className="border-l-2 border-light opacity-50 h-full mx-4 flex items-center">
              <div className="text-left ml-10 text-4xl">
                <li>1U Payload</li>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <hr className="my-10 mx-80 text-light opacity-50" />
      {/* TIMELINE */}
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
      {/* PROJECT LEADS */}
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
