"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";

export function Navigation() {
  const toggleHandler = (event: any) => {
    const htmlElement = document.documentElement;
    console.log(event.target.checked);
    if (event.target.checked) {
      htmlElement.setAttribute("data-theme", "dark");
    } else {
      htmlElement.setAttribute("data-theme", "light");
    }
  };
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-background-main fixed w-full border-b border-background-secondary">
      <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
        <MountainIcon className="w-6 h-6" />
        <span className="text-label-foreground">mdr.</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link className="hover:text-background-accent" href="#">
          Home
        </Link>
        <Link className="hover:text-background-accent" href="#">
          About
        </Link>
        <Link className="hover:text-background-accent" href="#">
          Projects
        </Link>
        <Link className="hover:text-background-accent" href="#skills">
          Skills
        </Link>
        <Link className="hover:text-background-accent" href="#contact">
          Contact
        </Link>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={toggleHandler}
          />
          <div className="shadow-md shadow-label-foreground relative w-11 h-6 bg-black rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white peer-checked:after:bg-black"></div>
        </label>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-4 p-4">
            <Link className="font-medium hover:underline" href="#">
              Home
            </Link>
            <Link className="font-medium hover:underline" href="#">
              About
            </Link>
            <Link className="font-medium hover:underline" href="#">
              Portfolio
            </Link>
            <Link className="font-medium hover:underline" href="#contact">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
