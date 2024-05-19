import { CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import devote from '../../public/assets/clash.jpg';
import baghchal from '../../public/assets/chess.jpg';
import eventhub from '../../public/assets/event.jpg';
import { ArrowRight } from "lucide-react";

export function Projects() {
  return (
    <section
      className="flex justify-center items-center w-full py-12 md:py-24 lg:py-32 bg-background-secondary"
      id="projects"
    >
      <div className="container px-4 md:px-6">
        <div className="space-y-3">
          <div className="inline-block text-white rounded-lg bg-background-accent px-3 py-1 text-sm">
            Projects
          </div>
          <h2 className="text-3xl text-label-foreground font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Check out some of the projects I have worked on.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-start gap-4">
              <Image src={baghchal} alt="project 1"></Image>
              <div className="space-y-2">
                <h3 className="text-lg text-label-foreground font-semibold">Baghchal.ai</h3>
                <p className="text-muted-foreground">
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
              <Image src={devote} alt="project 1"></Image>
              <div className="space-y-2">
                <h3 className="text-lg text-label-foreground font-semibold">De-Vote</h3>
                <p className="text-muted-foreground">
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
              <Image src={eventhub} alt="project 1"></Image>
              <div className="space-y-2">
                <h3 className="text-lg text-label-foreground font-semibold">Eventhub</h3>
                <p className="text-muted-foreground">
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
        <Link href="#">
          <div className="pt-16 flex justify-center items-center gap-2 hover:text-background-accent">
            <span>Find more</span>
            <ArrowRight height={16} width={16}/>
          </div>
        </Link>
      </div>
    </section>
  );
}
