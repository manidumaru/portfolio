import react from '../../public/assets/icons/react.svg'
import nodejs from '../../public/assets/icons/nodejs.svg'
import python from '../../public/assets/icons/python.svg'
import mongo from '../../public/assets/icons/mongo.svg'
import tailwind from '../../public/assets/icons/tailwind.svg'
import flutter from '../../public/assets/icons/flutter.svg'
import figma from '../../public/assets/icons/figma.svg'
import postgres from '../../public/assets/icons/postgres.svg'
import Image from "next/image";

export function Skills() {
  return (
    <section className="flex justify-center items-center bg-background-main w-full py-12 md:py-24 lg:py-32" id="skills">
      <div className="container px-4 md:px-6">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-background-accent px-3 py-1 text-sm text-white">
            Skills
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Skills
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Here are some of the technologies and tools I am proficient in.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-2">
            <Image src={react} alt="react" height={60}></Image>
            <span className="text-sm font-medium">React</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={nodejs} alt="react" height={60}></Image>
            <span className="text-sm font-medium">Node.js</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={mongo} alt="react" height={60}></Image>
            <span className="text-sm font-medium">MongoDB</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={python} alt="react" height={60}></Image>
            <span className="text-sm font-medium">Python</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={postgres} alt="react" height={60}></Image>
            <span className="text-sm font-medium">PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={tailwind} alt="react" height={60}></Image>
            <span className="text-sm font-medium">Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={figma} alt="react" height={60}></Image>
            <span className="text-sm font-medium">Figma</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={flutter} alt="react" height={60}></Image>
            <span className="text-sm font-medium">Flutter</span>
          </div>
        </div>
      </div>
    </section>
  );
}