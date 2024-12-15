"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import MainButton3 from "./MainButton3";
import {
  SiLinkedin,
  SiInstagram,
  SiX,
  SiDiscord,
  SiLinktree,
} from "react-icons/si";

export default function MainFooter() {
  return (
    <nav className="container mx-auto min-w-full z-40">
      <div className="relative bottom-0 left-0 right-0 px-10 lg:px-24 pt-12 pb-2 z-39 bg-bg2 text-bg">
        <div className="grid grid-cols-4 max-md:grid-cols-1 gap-x-6 max-md:gap-y-8 justify-between justify-items-stretch justify-self-center content-start max-w-max">
          <div className="justify-self-center content-center">
            <Link href="/">
              <Image
                src="SM - LightSVG.svg"
                alt="BruinSpace Icon Logo"
                sizes="100vw"
                style={{
                  width: "200px",
                  height: "200px",
                }}
                width={45}
                height={45}
              />
            </Link>
          </div>
          <div className="grid items-top justify-between justify-items-stretch gap-2 content-start justify-self-center">
            <Link
              className="hover:underline hover:decoration-highlight font-bold"
              href="/about"
            >
              ABOUT
            </Link>
            <div className="relative">
              <Link
                className="hover:underline hover:decoration-highlight absolute whitespace-nowrap"
                href="/join"
              >
                Join BruinSpace
              </Link>
              <br />
            </div>
            <Link
              className="hover:underline hover:decoration-highlight"
              href="/partnerships"
            >
              Partnerships
            </Link>
          </div>
          <div className="grid items-top justify-between justify-items-stretch gap-2 content-start justify-self-center">
            <Link
              className="hover:underline hover:decoration-highlight font-bold"
              href="/projects"
            >
              PROJECTS
            </Link>
            <Link
              className="hover:underline hover:decoration-highlight"
              href="/rapid"
            >
              Rapid
            </Link>
            <Link
              className="hover:underline hover:decoration-highlight"
              href="/overseer"
            >
              Overseer
            </Link>
            <Link
              className="hover:underline hover:decoration-highlight"
              href="/forge"
            >
              Forge
            </Link>
          </div>
          <div className="grid items-top justify-between justify-items-stretch gap-6 content-start justify-self-center">
            <div className="flex flex-col items-center pb-1 text-4xl">
              <div className="text-bg text-base font-bold">
                WHERE TO FIND US
              </div>
              <Link
                href="https://linktr.ee/uclabruinspace"
                target="_blank"
                className="m-2"
              >
                <MainButton3 btn_txt="Linktree" />
              </Link>
              <div className="flex flex-row">
                <Link
                  href="https://www.instagram.com/bruinspace/"
                  target="_blank"
                  className="my-2 mx-3"
                >
                  <SiInstagram />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/bruin-spacecraft-group-at-ucla/"
                  target="_blank"
                  className="my-2 mx-3"
                >
                  <SiLinkedin />
                </Link>
              </div>
              <div className="flex flex-row">
                <Link
                  href="https://discord.gg/FWmffUYwaX"
                  target="_blank"
                  className="my-2 mx-3"
                >
                  <SiDiscord />
                </Link>
                <Link
                  href="https://x.com/uclabruinspace"
                  target="_blank"
                  className="my-2 mx-3"
                >
                  <SiX />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-self-center text-center max-md:justify-self-center">
          <p className="max-md:text-center">
            Bruin Spacecraft Group. <br />A UCLA student organization.
          </p>
        </div>
      </div>
    </nav>
  );
}