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
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

const Project = () => {
  const params = useParams();
  const currentProject = projectsList.find(
    (project) => params.id === project.endpoint
  );
  const [isOpen, setIsOpen] = React.useState(false);
  const [hideShowAll, setHideShowAll] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleOpenChange = () => {
    setIsOpen((state) => !state);
  };

  const handleOpenImage = (imageIndex) => {
    setCurrentImageIndex(imageIndex)
    handleOpenChange()
  }

  const handleToggleShowAll = () => {
    setHideShowAll((state) => !state);
  };


  const imagesToDisplay = hideShowAll ? currentProject.gallery : currentProject.gallery.slice(0, 3);


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

          <ul className={`hidden md:flex scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent w-full md:w-5/6 lg:w-1/2 flex-col gap-12 sm:gap-10 md:gap-16  ${currentProject.gallery.length > 3 && "md:max-h-[820px] md:overflow-y-scroll pr-1"}`}>
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
          <ul className={`relative flex md:hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent w-full md:w-5/6 lg:w-1/2 flex-col gap-12 sm:gap-10 md:gap-16 ${currentProject.gallery.length > 3 && "md:max-h-[820px] md:overflow-y-scroll pr-1"}`}>
            {imagesToDisplay.map((image, index) => (
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
            <div className='absolute -bottom-24 left-1/2 transform -translate-x-1/2 flex md:hidden justify-center mt-8 sm:mt-0'>
              <Button size='lg' onClick={handleToggleShowAll} className='flex-col gap-3 text-sm border-4 rounded-full sm:text-base size-28 sm:size-40 border-muted'>
                {hideShowAll ? <ArrowUpIcon className='animate-bounce size-6 sm:size-8' /> : <ArrowDownIcon className='animate-bounce size-6 sm:size-8' />}
                {hideShowAll ? "Ver menos" : "Ver mais"}
              </Button>
            </div>
          </ul>

        </section>
      </main>
    </>
  );
};

export default Project;
