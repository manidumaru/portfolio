import javascript from "@/public/appIcons/javascript.svg";
import react from "@/public/appIcons/react.svg";
import nextjs from "@/public/appIcons/nextjs.svg";
import dart from "@/public/appIcons/dart.svg";
import flutter from "@/public/appIcons/flutter.svg";
import postgres from "@/public/appIcons/postgres.svg";
import mongo from "@/public/appIcons/mongo.svg";
import python from "@/public/appIcons/python.svg";
import tailwind from "@/public/appIcons/tailwind.svg";
import Image from "next/image";

const data = [
    {
        name: "Javascript",
        icon: javascript
    },
    {
        name: "React",
        icon: react
    },
    {
        name: "Dart",
        icon: dart
    },
    {
        name: "Flutter",
        icon: flutter
    },
    {
        name: "Postgres",
        icon: postgres
    },
    {
        name: "Python",
        icon: python
    },
    {
        name: "Mongo",
        icon: mongo
    },
    {
        name: "Tailwind",
        icon: tailwind
    },
    {
        name: "Next.js",
        icon: nextjs
    },
];

export default function SkillList() {
  return (
    <div className="flex gap-10 flex-wrap my-4 justify-center items-center max-w-[40rem]">
      {data.map((skill) => {
        return (
          <div key={skill.name} className="flex flex-col gap-4">
            <Image              
              src={skill.icon}
              alt={"app"}
              className="h-12 w-12 md:h-16 md:w-16"
            />     
            <p className="flex justify-center text-muted-foreground">{skill.name}</p>       
          </div>
        );
      })}
    </div>
  );
}
