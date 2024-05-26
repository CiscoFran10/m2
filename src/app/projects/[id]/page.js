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
import { AnimatePresence, motion } from 'framer-motion'

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
          <Carousel opts={{ startIndex: currentImageIndex }} className="mx-2 mt-8 sm:mx-6">
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
            <CarouselPrevious className='-left-12' />
            <CarouselNext className='-right-12' />
          </Carousel>
        </DialogContent>
      </Dialog>
      <>

      </>
      <main className="mt-14">
        <div className="container flex justify-end">
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
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex flex-col gap-4 w-full md:max-w-[462px] md:min-w-[300px]">
            <h1 className="text-base text-center title md:text-lg">
              O PROJETO
            </h1>
            <h2 className="text-3xl font-bold text-left sm:text-4xl md:text-5xl">
              {currentProject.title}
            </h2>

            <p className="mt-3 text-primary">{currentProject.description}</p>
          </motion.div>

          <ul className={`hidden md:flex scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent w-full md:w-5/6 lg:w-1/2 flex-col gap-12 sm:gap-10 md:gap-16  ${currentProject.gallery.length > 3 && "md:max-h-[820px] md:overflow-y-scroll pr-1"}`}>
            {currentProject.gallery.map((image, index) => (
              <motion.li layout initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -30, opacity: 0 }} className="w-full list-none cursor-zoom-in md:w-full" key={index} onClick={() => handleOpenImage(index)}>
                <Image
                  src={image}
                  alt={currentProject.title}
                  width={633}
                  height={554}
                  className="w-full h-full"
                />
              </motion.li>
            ))}
          </ul>

          <div className="relative">
            <motion.ul layout transition={{ duration: 1 }} className={`relative flex md:hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent w-full md:w-5/6 lg:w-1/2 flex-col gap-12 sm:gap-10 md:gap-16 ${currentProject.gallery.length > 3 && "md:max-h-[820px] md:overflow-y-scroll pr-1"}`}>
              <AnimatePresence >
                {imagesToDisplay.map((image, index) => (
                  <motion.li layout initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -30, opacity: 0 }} className="w-full list-none cursor-zoom-in md:w-full" key={index} onClick={() => handleOpenImage(index)}>
                    <Image
                      src={image}
                      alt={currentProject.title}
                      width={633}
                      height={554}
                      className="w-full h-full"
                    />
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>

            {currentProject.gallery.length > 3 &&
              <div className='absolute flex justify-center mt-8 transform -translate-x-1/2 -bottom-24 left-1/2 md:hidden sm:mt-0'>
                <Button size='lg' onClick={handleToggleShowAll} className='flex-col gap-3 text-sm border-4 rounded-full sm:text-base size-28 sm:size-40 border-muted'>
                  {hideShowAll ? <ArrowUpIcon className='animate-bounce size-6 sm:size-8' /> : <ArrowDownIcon className='animate-bounce size-6 sm:size-8' />}
                  {hideShowAll ? "Ver menos" : "Ver mais"}
                </Button>
              </div>
            }
          </div>

        </section>
      </main>
    </>
  );
};

export default Project;
