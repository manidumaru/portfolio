"use client";

import Image from "next/image";
import { IndividualProject } from "./project-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { GitBranch, Link2Icon, LinkIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function EachProject({
  project,
}: {
  project: IndividualProject;
}) {
  return (
    <div className="-mx-5 md:mx-0 flex flex-col gap-2">
      <div className="flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
        <div className="flex flex-col">
          <p className="text-xl md:text-2xl">{project.name}</p>
          <p className="text-sm md:text-lg text-muted-foreground">
            {project.tagline}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {project.techStack.map((tech) => (
            <Badge key={tech} className="h-6 text-xs md:text-sm" variant={"secondary"} >{tech}</Badge>
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
      <p className="text-xs md:text-sm text-gray-300 md:text-center md:pt-4">
        {project.description}
      </p>
      <div className="flex justify-between md:justify-end gap-4 pt-4">
        <Link href={project.githubURL} target="_blank">
          <Button variant={"default"} size={"sm"} className="text-xs">
            <span className="flex gap-2">
              Github Link <GitBranch size={14} />
            </span>
          </Button>
        </Link>

        <Link href={project.liveUrl} target="_blank">
          <Button
            variant={"default"}
            size={"sm"}
            className="text-xs"
            disabled={project.liveUrl ? false : true}
          >
            <span className="flex gap-2">
              Visit Website <LinkIcon size={14} />
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
