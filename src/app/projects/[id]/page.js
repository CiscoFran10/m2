"use client";

import React from "react";
import { useParams } from "next/navigation";
import projectsList from "@/lib/projectsData";
import Image from "next/image";

const Project = () => {
  const params = useParams();
  const currentProject = projectsList.find(
    (project) => params.id === project.endpoint
  );

  return (
    <>
      <main className="mt-14">
        <section className="container mt-28 md:mt-44 mb-[82px] sm:mb-[168px] md:mb-[248px] flex flex-col md:flex-row gap-20 md:justify-between" >
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
              <li className="list-none cursor-zoom-in w-full md:w-full" key={index}>
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
