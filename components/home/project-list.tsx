import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import ShopifyHome from "@/public/ProjectAssets/ShopifyScreenshots/shopifyhome.png";
import BookverseHome from "@/public/ProjectAssets/BookverseScreenshots/home.png";
import MovieLibraryScreenshot from "@/public/ProjectAssets/MovieLibraryScreenshots/moviesLibrary.png";
import { CardSpotlight } from "../ui/card-spotlight";
import Image from "next/image";
import ShimmerButton from "../magicui/shimmer-button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ProjectData = [
  {
    id: 1,
    name: "Shopify",
    image: ShopifyHome,
    tag: "Local e-commerce platform",
    description:
      "A small local marketplace where an admin can list products to sell and users can place an order to buy listed products. The project is authenticated using Next Auth.",
    techstack: ["Next.js", "Postgres", "NextAuth", "Drizzle ORM", "NeonDB"],
  },
  {
    id: 2,
    name: "Zoovies",
    image: MovieLibraryScreenshot,
    tag: "Films of interest",
    description:
      "A library of movies and tvshows where users can discover based on their interest. A sleek UI for a pleasant user experience",
    techstack: ["Next.js", "Postgres", "NextAuth", "Drizzle ORM", "NeonDB"],
  },
  {
    id: 3,
    name: "Bookverse",
    image: BookverseHome,
    tag: "Blockchain based NFT marketplace",
    description:
      "A blockchain based marketplace where users can buy and sell books as NFTs. Ethereum is used as the digital currency and metamask as the wallet.",
    techstack: ["Next.js", "Postgres", "NextAuth", "Drizzle ORM", "NeonDB"],
  },
];

export function ProjectList() {
  return (
    <div className="py-40 z-[100] flex flex-wrap px-8 gap-8 items-center justify-center">
      {ProjectData.map((project) => (
        <Modal key={project.id}>
          <CardSpotlight className="flex flex-col gap-2">
            <p className="text-xl font-bold">{project.name}</p>
            <p className="text-muted-foreground">{project.tag}</p>
            <Image
              src={project.image}
              alt={project.name}
              height={200}
              width={440}
            />
            <div className="flex justify-end">
              <ModalTrigger>
                <ShimmerButton className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 tracking-wide">
                  Expand
                </ShimmerButton>
              </ModalTrigger>
            </div>
          </CardSpotlight>
          <ModalBody className="mx-4">
            <ModalContent className="flex gap-2">
              <p className="text-3xl font-bold">{project.name}</p>
              <p className="text-muted-foreground">{project.description}</p>
              <Image
                src={project.image}
                alt={project.name}
                className="w-full h-auto py-4"
              />
              <div className="flex flex-wrap gap-2">
                {project.techstack.map((tech) => (
                  <Badge variant={"secondary"} key={tech} className="text-xs">{tech}</Badge>
                ))}
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
              <Link href="/projects" className="flex gap-4 items-center">Find more <ArrowRight size={18} /></Link>
            </ModalFooter>
          </ModalBody>
        </Modal>
      ))}
    </div>
  );
}
