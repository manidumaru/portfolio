import { CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import placeHolder from "../../public/placeholder.svg";

export function Projects() {
  return (
    <section
      className="flex justify-center items-center w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      id="projects"
    >
      <div className="container px-4 md:px-6">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            Projects
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Recent Work
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Check out some of the projects I have worked on.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-start gap-4">
              <Image src={placeHolder} alt="project 1"></Image>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Project 1</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A web application built with React, Node.js, and MongoDB.
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-start gap-4">
              <Image src={placeHolder} alt="project 1"></Image>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Project 2</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A mobile app built with React Native and Firebase.
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Firebase</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-start gap-4">
              <Image src={placeHolder} alt="project 1"></Image>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Project 3</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A full-stack e-commerce application built with Next.js,
                  Express, and PostgreSQL.
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
