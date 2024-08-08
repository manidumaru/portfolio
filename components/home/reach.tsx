"use client";

import { BackgroundBeams } from "../ui/background-beams";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import TypingAnimation from "../magicui/typing-animation";
import github from "@/public/contachIcons/github.svg";
import linkedin from "@/public/contachIcons/linkedin-tile.svg";
import insta from "@/public/contachIcons/instagram.svg";
import whatsapp from "@/public/contachIcons/whatsapp.svg";

import Image from "next/image";
import Link from "next/link";

export default function ReachOut() {
  return (
    <div className="h-dvh w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <TypingAnimation
        text="REACH OUT"
        className="absolute -top-[18px] md:left-10 text-3xl md:-top-6 md:text-5xl text-muted-foreground/40 font-extrabold z-100"
      />
      <div className="flex flex-wrap w-full justify-around items-center">
        <div className="flex flex-col">
          <div className="max-w-2xl p-4">
            <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              Feel free to Contact
            </h1>
            <p></p>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              I&apos;m always open to discussing new ideas and projects.
            </p>
          </div>
          <div className="flex justify-center items-center gap-8 z-[100]">
            <Link href="https://github.com/manidumaru" target="_blank"><Image src={github} alt="GitHub" className="h-14 w-14 md:h-18 md:w-18 lg:h-20 lg:w-20" /></Link>
            <Link href="https://www.linkedin.com/in/mani-dumaru-2b3641235/" target="_blank"><Image src={linkedin} alt="GitHub" className="h-14 w-14 md:h-18 md:w-18 lg:h-20 lg:w-20" /></Link>
            <Link href="https://github.com/manidumaru" target="_blank"><Image src={whatsapp} alt="GitHub" className="h-14 w-14 md:h-18 md:w-18 lg:h-20 lg:w-20" /></Link>
            <Link href="https://www.instagram.com/_mdr01/" target="_blank"><Image src={insta} alt="GitHub" className="h-14 w-14 md:h-18 md:w-18 lg:h-20 lg:w-20" /></Link>
          </div>
        </div>
        <div className="relative flex h-[500px] w-[500px] flex-col items-center justify-center overflow-hidden rounded-lg">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
            Contact
          </span>

          {/* Inner Circles */}
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={20}
            delay={20}
            radius={80}
          >
            <Image src={insta} alt="Instagram" className="h-8" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={20}
            delay={10}
            radius={80}
          >
            <Image src={whatsapp} alt="Whatsapp" className="h-8" />
          </OrbitingCircles>

          {/* Outer Circles (reverse) */}
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            radius={190}
            duration={20}
            reverse
          >
            <Image src={github} alt="GitHub" className="h-10" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            radius={190}
            duration={20}
            delay={20}
            reverse
          >
            <Image src={linkedin} alt="LinkedIn" className="w-8" />
          </OrbitingCircles>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
