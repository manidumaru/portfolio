import ShineBorder from "../magicui/shine-border";
import BoxReveal from "@/components/magicui/box-reveal";

export default function Soon() {
  return (
    <ShineBorder className="flex justify-center items-center h-svh w-full">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl md:text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Trying to figure out
        </span>
      </BoxReveal>
    </ShineBorder>
  );
}
