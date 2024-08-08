import React from "react";
import Link from "next/link";
import {
  Contact2Icon,
  HomeIcon,
  LucideInfo,
  Moon,
  WorkflowIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import ThemeControler from "./theme-control";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = [
  {
    name: "Home",
    url: "/",
    icon: (props: IconProps) => <HomeIcon {...props} />,
  },
  {
    name: "About",
    url: "/about",
    icon: (props: IconProps) => <LucideInfo {...props} />,
  },
  {
    name: "Projects",
    url: "/projects",
    icon: (props: IconProps) => <WorkflowIcon {...props} />,
  },
  {
    name: "Contact",
    url: "/contact",
    icon: (props: IconProps) => <Contact2Icon {...props} />,
  },
];

export function Navbar() {
  return (
    // <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
    <TooltipProvider>
      <Dock direction="middle" className="border-0">
        {DATA.map((item) => (
          <DockIcon key={item.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.url}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}        
      </Dock>
    </TooltipProvider>
  );
}
