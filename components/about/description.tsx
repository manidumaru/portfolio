import BoxReveal from "@/components/magicui/box-reveal";
import ShineBorder from "@/components/magicui/shine-border";
import { Separator } from "../ui/separator";

export default function DescriptionPortion() {
  return (
    <div className="md:mx-32">
      <ShineBorder
        className="relative flex h-auto w-full flex-col items-center justify-start overflow-hidden rounded-lg border bg-background md:shadow-xl py-10"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            About me
          </span>
        </BoxReveal>
        <div className="flex flex-col md:flex-row md:pt-10">
          <p className="basis-1/2 px-4 md:px-10 text-muted-foreground mt-4 text-xs md:text-lg">
            As a recent Computer Engineering graduate with a keen interest in
            software development, I’m driven by a passion for crafting
            innovative solutions in the tech world. When I’m not immersed in
            coding, you’ll find me engaged in a strategic game of chess or out
            on the cricket field, both of which sharpen my mind and foster
            teamwork. My love for exploration extends beyond the digital
            realm—I’m an avid traveler and trekker, always seeking out new
            landscapes to discover and challenges to conquer. Whether it’s the
            thrill of a mountain trail or the satisfaction of solving complex
            problems, I thrive on experiences that push my limits and broaden my
            horizons.
          </p>
          <div className="basis-1/2 mt-4 px-4 md:px-10 text-muted-foreground">
            <div id="internship" className="flex justify-start items-center gap-6">
              <div className="h-14 w-14 md:h-20 md:w-20 bg-gradient-to-b from-gray-700 to-gray-300/80 rounded-full"></div>
              <div className="text-xs md:text-lg">
                <p className="text-2xl">Software Intern</p>
                <span>LIS Nepal Pvt. Ltd.</span><br/>
                <span className="italic">April, 2024 - July, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </ShineBorder>
    </div>
  );
}
