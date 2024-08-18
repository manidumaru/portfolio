"use client";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";

import ContactForm from "./contact-form";
import ContactInfromation from "./contact-information";
import { Separator } from "@/components/ui/separator";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

export default function ContactPage() {
  return (
    <div className="pt-10 md:pt-20 h-svh flex flex-col items-center mb-80 md:mb-0">
      <span className="text-3xl md:text-5xl font-extrabold">Feel free to Contact</span>
      <NeonGradientCard className="flex justify-center mt-10 md:mt-16 w-auto h-auto mx-4">
        <div className="flex flex-col gap-4 md:flex-row mx-2">
          <ContactForm />          
          <Separator orientation="vertical" className="bg-red-500 mx-6 z-[9999]" />
          <ContactInfromation />
        </div>
      </NeonGradientCard>
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
        ]}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "h-[100%]"
        )}
      />
    </div>
  );
}
