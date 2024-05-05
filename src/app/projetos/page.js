"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/projectsCard";
import projectsList from "@/lib/projectsData";


/* export const metadata = {
  title: "M2 Arquitetura | Projetos",
  description: "Portfólio de Projetos",
}; */

const Projects = () => {
  const [projectsFilter, setProjectsFilter] = React.useState('all');

  return (
    <>
      <main className="mt-14">
        <section className="container mt-28 sm:mt-36">
          <div className="w-full flex flex-col items-center gap-3 mb-14 sm:mb-20 md:mb-28">
            <h1 className="text-base md:text-lg text-center title-center">PROJETOS</h1>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
              Explore os nossos melhores trabalhos
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Button onClick={() => setProjectsFilter('all')} variant={projectsFilter === "all" ? "filterActive" : "filter"} size="auto">
              TODOS
            </Button>
            <span className="block font-heading font-normal text-primary/80">
              /
            </span>
            <Button onClick={() => setProjectsFilter('business')} variant={projectsFilter === "business" ? "filterActive" : "filter"} size="auto">
              COMERCIAIS
            </Button>
            <span className="block font-heading font-normal text-primary/80">
              /
            </span>
            <Button onClick={() => setProjectsFilter('residential')} variant={projectsFilter === "residential" ? "filterActive" : "filter"} size="auto">
              RESIDENCIAIS
            </Button>
          </div>

          <ul className="mt-10 sm:mt-16 mb-[82px] sm:mb-[168px] md:mb-[248px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-9 sm:gap-y-12 sm:gap-x-8">

            {projectsList
              .filter(project => projectsFilter === 'all' || project.category === projectsFilter)
              .map(project =>
                <ProjectCard key={project.endpoint} {...project} />
              )
            }

          </ul>
        </section>
      </main>
    </>
  );
};

export default Projects;
