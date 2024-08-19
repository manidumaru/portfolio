"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import img1 from "@/public/aboutAssets/IMG_20230126_174420.jpg";
import img2 from "@/public/aboutAssets/IMG_20230126_174726_Bokeh.jpg";
import img3 from "@/public/aboutAssets/IMG_20231028_095004.jpg";
import img4 from "@/public/aboutAssets/IMG_20231029_100435.jpg";
import img5 from "@/public/aboutAssets/IMG_20231029_104400.jpg";

import Image from "next/image";
import DescriptionPortion from "./description";

export default function MyInformationSection() {
  const imageData = [img2, img1, img3, img4, img5];
  return (
    <div className="flex flex-col items-center p-4 md:flex-row md:justify-center md:items-center gap-6 md:gap-0">
      <div id="edscription" className="order-2 md:order-1 flex justify-end items-end">
        <DescriptionPortion />
      </div>
      {/* <div id="image-carousel" className="order-1 md:order-2 ">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="mx-auto"
        >
          <CarouselContent>
            {imageData.map((img, index) => (
              <CarouselItem
                key={index}
                className="flex justify-center items-center"
              >
                <Image src={img} alt="image" className="h-auto w-48 md:w-96 rounded-xl" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div> */}
    </div>
  );
}
