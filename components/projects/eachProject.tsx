"use client";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

import Image from "next/image";
import { IndividualProject } from "./project-data";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GitBranch, LinkIcon } from "lucide-react";
import Link from "next/link";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Badge } from "../ui/badge";

export default function EachProject({
  project,
}: {
  project: IndividualProject;
}) {
  const words = project.tagline
  return (
    <div className="-mx-5 md:mx-0 flex flex-col gap-2">
      <div className="flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
        <div className="flex flex-col">
          <p className="text-xl md:text-2xl">{project.name}</p>
          <p className="text-sm md:text-lg text-muted-foreground">
            {/* {project.tagline} */}
            <TextGenerateEffect words={words} className="text-red-600" />
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              className="h-6 text-xs font-extralight"
              variant={"secondary"}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
      <div>
        <Carousel className="cursor-grab">
          <CarouselContent>
            {project.images.map((img, index) => (
              <Image key={index} src={img} alt="Image" />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <p className="text-xs md:text-sm text-gray-300 md:text-center md:pt-4 font-extralight">
        {project.description}
      </p>
      <div className="flex justify-between md:justify-end gap-4 pt-4">
        <Link href={project.githubURL} target="_blank">
          <AnimatedGradientText>
            {/* 🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "} */}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Github
            </span>
            <GitBranch className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </Link>

        <Link href={project.liveUrl} target="_blank" hidden={project.liveUrl ? false : true}>
          <AnimatedGradientText>
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Visit Website
            </span>
            <LinkIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </Link>
      </div>
    </div>
  );
}
