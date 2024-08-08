"use client";

import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { Button } from "../ui/moving-border";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="w-full h-svh rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <div className="flex flex-col  items-center justify-center gap-6 p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              <span className="text-3xl md:text-4xl lg:text-6xl">
                Mani Dumaru
              </span>{" "}
              <br /> Web Developer.
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto tracking-normal">
              I&apos;m a web developer from Nepal focused on the flashy side of
              things. I am passionate about building excellent software with
              clean and user friendly experience.
            </p>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 tracking-wide flex gap-2"
            >
              Resume{" "}
              <span>
                <ArrowDown size={14} />
              </span>
            </Button>
          </div>
        </motion.h1>
      </LampContainer>
    </div>
  );
}
