"use client";

import React from "react";
import { useParams } from "next/navigation";
import projectsList from "@/lib/projectsData";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Dialog, DialogClose, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Project = () => {
  const params = useParams();
  const currentProject = projectsList.find(
    (project) => params.id === project.endpoint
  );
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleOpenChange = () => {
    setIsOpen((state) => !state);
  };

  const handleOpenImage = (imageIndex) => {
    setCurrentImageIndex(imageIndex)
    handleOpenChange()
  }



  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleOpenChange} >
        <DialogContent className="bg-transparent max-w-[820px] border-none">
          <Carousel opts={{ startIndex: currentImageIndex }} className="mt-6 mx-5">
            <CarouselContent className="bg-transparent border-none">
              {currentProject.gallery.map((image, index) => (
                <CarouselItem key={index} className="w-full">
                  <Image
                    src={image}
                    alt={currentProject.title}
                    width={633}
                    height={554}
                    className="w-full h-full"
                  />

                </CarouselItem>


              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DialogContent>
      </Dialog>
      <>

      </>
      <main className="mt-14">
        <div className="flex justify-end container">
          <Button
            asChild
            variant="neutral"
            size="auto"
            className="flex mr-auto mt-20 md:mt-32 mb-12 md:mb-14 transition ease-in-out delay-150 duration-300 scale-[1.7] md:scale-[2.5] md:hover:scale-[3]"
          >
            <Link href={`/projects`}>
              <Icons.arrow className="text-primary hover:text-accent" />
            </Link>
          </Button>
        </div>
        <section className="container mb-[82px] sm:mb-[168px] md:mb-[248px] flex flex-col md:flex-row gap-20 md:justify-between" >
          <div className="flex flex-col gap-4 w-full md:max-w-[462px] md:min-w-[300px]">
            <h1 className="title text-base md:text-lg text-center">
              O PROJETO
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left">
              {currentProject.title}
            </h2>

            <p className="text-primary mt-3">{currentProject.description}</p>
          </div>

          <ul className="w-full md:w-5/6 lg:w-1/2 flex flex-col gap-12 sm:gap-10 md:gap-16">
            {currentProject.gallery.map((image, index) => (
              <li className="list-none cursor-zoom-in w-full md:w-full" key={index} onClick={() => handleOpenImage(index)}>
                <Image
                  src={image}
                  alt={currentProject.title}
                  width={633}
                  height={554}
                  className="w-full h-full"
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Project;
