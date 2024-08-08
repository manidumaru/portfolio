"use client";

import HeroSection from "./hero";
import Projects from "./projects";
import ReachOut from "./reach";
import Skills from "./skills";



export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Projects />
      <Skills />
      <ReachOut />
    </div>
  );
}
