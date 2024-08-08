import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
import TypingAnimation from "../magicui/typing-animation";
import {ProjectList} from "./project-list";

export default function Projects() {
  return (
    <div className="rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
        <TypingAnimation          
          text="FEATURED PROJECTS"
          className="absolute -top-[18px] md:left-10 text-3xl md:-top-6 md:text-5xl text-muted-foreground/40 font-extrabold"
        />
      <ProjectList />
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
