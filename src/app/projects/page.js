"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/projectsCard";
import projectsList from "@/lib/projectsData";
import { AnimatePresence, motion } from 'framer-motion'


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
          <div className="flex flex-col items-center w-full gap-3 mb-14 sm:mb-20 md:mb-28">
            <h1 className="text-base text-center md:text-lg title-center">PROJETOS</h1>
            <p className="text-3xl font-bold text-center sm:text-4xl md:text-5xl">
              Explore os nossos melhores trabalhos
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Button onClick={() => setProjectsFilter('all')} variant={projectsFilter === "all" ? "filterActive" : "filter"} size="auto">
              TODOS
            </Button>
            <span className="block font-normal font-heading text-primary/80">
              /
            </span>
            <Button onClick={() => setProjectsFilter('business')} variant={projectsFilter === "business" ? "filterActive" : "filter"} size="auto">
              COMERCIAIS
            </Button>
            <span className="block font-normal font-heading text-primary/80">
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
                <motion.div layout transition={{ duration: 0.4 }} initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} key={project.endpoint}>
                  <ProjectCard  {...project} />
                </motion.div>
              )
            }

          </ul>
        </section>
      </main>
    </>
  );
};

export default Projects;
