"use client";

import Link from "next/link";

export function Hero() {
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
    <section className="flex justify-center items-center bg-background-main w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Mani Dumaru
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Full Stack Developer
            </p>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              I’m a web developer from Nepal focused on the flashy side of
              things. I am passionate about building excellent software with
              clean and user friendly experience.
            </p>
          </div>
          <div className="space-x-4">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              href="#projects"
            >
              View Projects
            </Link>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md text-white bg-background-accent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-background-secondary hover:text-label-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              href="#contact"
            >
              Contact Me
            </Link>
            <input
              id="toggle-switch"
              type="checkbox"
              onChange={toggleHandler}
            ></input>
          </div>
        </div>
      </div>
    </section>
  );
}
