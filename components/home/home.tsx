"use client";

import HeroSection from "./hero";
import Projects from "./projects";
import Skills from "./skills";



export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Projects />
      <Skills />
    </div>
  );
}
