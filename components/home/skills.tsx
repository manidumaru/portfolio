import TypingAnimation from "../magicui/typing-animation";
import IconCloud from "@/components/magicui/icon-cloud";
import SkillList from "./skill-list";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function Skills() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <TypingAnimation
        text="MY SKILLS"
        className="absolute -top-[18px] md:left-10 text-3xl md:-top-6 md:text-5xl text-muted-foreground/40 font-extrabold z-100"
      />
      <div className="w-full flex flex-wrap items-center justify-around">
        <div>
          <SkillList />
        </div>
        <div className="h-48 w-48 md:h-72 md:w-72 lg:h-96 lg:w-96">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
}
