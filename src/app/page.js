'use client'

import React from "react";
import { Carousel, CarouselContent, CarouselIndicator, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import SocialLinks from "@/components/social-links";
import Image from "next/image";
import { Accordion, AccordionTrigger, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import Marquee from "react-fast-marquee";
import { ArrowUpIcon, CalendarIcon } from "@radix-ui/react-icons";
import { Icons } from "@/components/icons";
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from 'framer-motion'
import Project from "./projects/[id]/page";
import { ProjectCard } from "@/components/projectsCard";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const banners = [{
  title: (<>Contruindo sua visão, <br /> criando realidade</>),
  description: 'Bem-vindo ao nosso mundo de maravilhas arquitetônicas, onde a criatividade encontra a funcionalidade.',
  image: '/banner.png',
},
{
  title: (<>Transformando ideias, <br /> em estruturas</>),
  description: 'Bem-vindo ao nosso mundo de maravilhas arquitetônicas, onde a criatividade encontra a funcionalidade.',
  image: '/edificio.jpg',
}]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
    }
  }
}

const carousel_item = {
  hidden: { opacity: 0, x: -40, },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
}

export default function Home() {
  const [current, setCurrent] = React.useState(0)


  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <main >
        <div className='relative'>
          <SocialLinks className={'hidden lg:flex absolute z-20 left-7 top-1/2 -translate-y-1/2'} />

          <ul className='grid'>
            {banners.map((item, index) => {
              return <li className={cn('col-start-1 col-end-3 row-start-1 row-end-3 transition-all duration-1000', current === index ? 'opacity-100' : 'opacity-0')} key={index} >
                <div style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.5) 100%, rgba(0,0,0,0.5)) , url(${item.image}) no-repeat center center/cover`
                }}
                  className='relative grid justify-center w-full min-h-screen overflow-hidden' >

                  <div className={'gap-10 h-full justify-center grid'}>
                    <div className=' bg-black bg-black/30 w-[340px] block col-start-1 col-end-3 row-start-1 row-end-3 -translate-x-20 h-[70%]'></div>

                    <motion.div
                      key={current}
                      variants={container}
                      initial="hidden"
                      animate="show"
                      className='relative flex flex-col justify-center col-start-1 col-end-3 row-start-1 row-end-3 gap-10 overflow-hidden'>
                      <motion.h1 variants={carousel_item} className='relative text-5xl leading-tight uppercase text-secondary font-heading '>{item.title}</motion.h1>
                      <motion.p variants={carousel_item} className='text-lg max-w-[50ch] text-secondary font-light'>Bem-vindo ao nosso mundo de maravilhas arquitetônicas, onde a criatividade encontra a funcionalidade.</motion.p>

                      <SocialLinks className={'flex-row lg:hidden '} />
                    </motion.div>
                  </div>
                </div>
              </li>
            })}
          </ul>
        </div>

        <div className='relative'>
          <div className='absolute inset-0 z-10 flex justify-center pointer-events-none'>
            <div className='max-w-7xl grid w-full h-full grid-cols-2 sm:grid-cols-[repeat(3,1fr)] gap-40 px-10'>
              <div className='border-x border-accent/10' />
              <div className='border-x border-accent/10' />
              <div className='border-x border-accent/10' />
            </div>
          </div>

          <section initial={{ y: 100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: '1000px' }} id='about' className='container flex flex-col gap-5 pt-32 bg-[url(/blueprint.jpg)] bg-cover min-h-screen '>
            <h2 className='title'>SERVIÇOS</h2>
            <p className='text-3xl font-bold'>Descubra a elegância na arquitetura moderna</p>


            <div className='grid gap-10 mt-10 md:grid-cols-[0.8fr_1fr]'>
              <Image className='relative w-full' src='/about.png' alt='' width={500} height={650} />

              <Accordion defaultValue='item-1' type="multiple" collapsible={'true'}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>PROJETOS RESIDENCIAIS</AccordionTrigger>
                  <AccordionContent>
                    Project management is a critical function for any company, particularly those involved in complex projects or construction work. Project management involves planning, organizing, and executing projects efficiently and effectively, from conception to completion Overall, project management is an essential service for companies involved in complex projects, ensuring that projects are completed on time, within budget, and to the client&apos;s satisfaction. By working with an experienced project management company, clients can focus on their core business activities while having confidence that their projects are being managed effectively.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>PROJETOS COMERCIAIS</AccordionTrigger>
                  <AccordionContent>
                    Project management is a critical function for any company, particularly those involved in complex projects or construction work. Project management involves planning, organizing, and executing projects efficiently and effectively, from conception to completion Overall, project management is an essential service for companies involved in complex projects, ensuring that projects are completed on time, within budget, and to the client&apos;s satisfaction. By working with an experienced project management company, clients can focus on their core business activities while having confidence that their projects are being managed effectively.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>GERENCIAMENTO DE PROJETOS</AccordionTrigger>
                  <AccordionContent>
                    Project management is a critical function for any company, particularly those involved in complex projects or construction work. Project management involves planning, organizing, and executing projects efficiently and effectively, from conception to completion Overall, project management is an essential service for companies involved in complex projects, ensuring that projects are completed on time, within budget, and to the client&apos;s satisfaction. By working with an experienced project management company, clients can focus on their core business activities while having confidence that their projects are being managed effectively.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          <section className='relative mt-20'>
            <Marquee className='bg-[url(/marquee.jpg)] bg-cover bg-center py-60'>
              <p className='font-heading 1 [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:white] text-transparent mx-20 text-8xl'>CONTRUÇÃO MODERNA</p>
              <p className='font-heading 1 [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:white] text-transparent mx-20 text-8xl' >DESIGN DE INTERIORES</p>
              <p className='font-heading 1 [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:white] text-transparent mx-20 text-8xl'>FORA DA CAIXA</p>
            </Marquee>

            <span className='absolute top-0 inset-x-0 block h-10 bg-white [clip-path:ellipse(52%_100%_at_50%_0%)]'></span>
            <span className='absolute bottom-0 inset-x-0 block h-10 bg-white [clip-path:ellipse(52%_100%_at_50%_100%)]'></span>

          </section>


          <section className='py-10 mt-20 bg-muted'>
            <div className='container'>
              <h2 className='title'>PROJETOS</h2>

              <div className='grid gap-6 mt-4 lg:grid-cols-[0.7fr_1fr] sm:items-center sm:gap-x-10'>
                <p className='text-3xl font-bold sm:text-5xl'>Estilo que conta uma história</p>
                <p className='max-w-lg'>Cada projeto conta uma narrativa única. De residências elegantes a espaços comerciais inovadores, nossas criações são testemunhas de histórias que se desdobram através da arquitetura envolvente.</p>
              </div>
            </div>

            <Carousel opts={{
              align: 'start',
              breakpoints: {
                '(min-width: 768px)': { slidesToScroll: 2 }
              }
            }} className='relative z-20 mt-16' >
              <CarouselContent className='-ml-0'>
                <CarouselItem className='relative pl-0 sm:basis-1/2 lg:basis-1/4'>
                  <ProjectCard locationType='INTERIOR' title='cotton house' coverImage={'/project-1.avif'} endpoint={'projeto-1'} />
                </CarouselItem>
                <CarouselItem className='relative pl-0 sm:basis-1/2 lg:basis-1/4'>
                  <ProjectCard locationType='EXTERIOR' title='cotton house' coverImage={'/project-2.avif'} endpoint={'projeto-2'} />
                </CarouselItem>
                <CarouselItem className='relative pl-0 sm:basis-1/2 lg:basis-1/4'>
                  <ProjectCard locationType='COMERCIAL' title='cotton house' coverImage={'/project-3.avif'} endpoint={'projeto-3'} />
                </CarouselItem>
                <CarouselItem className='relative pl-0 sm:basis-1/2 lg:basis-1/4'>
                  <ProjectCard locationType='RESIDENCIAL' title='cotton house' coverImage={'/project-4.avif'} endpoint={'projeto-4'} />
                </CarouselItem>
                <CarouselItem className='relative pl-0 sm:basis-1/2 lg:basis-1/4'>
                  <ProjectCard locationType='INTERIOR' title='cotton house' coverImage={'/project-5.avif'} endpoint={'projeto-5'} />
                </CarouselItem>
              </CarouselContent>
              <CarouselIndicator />
              <CarouselNext />
              <CarouselPrevious />

              <div className='flex justify-center mt-8 sm:mt-0'>
                <Button asChild size='lg' className='flex-col gap-3 text-sm border-4 rounded-full sm:text-base sm:-translate-y-14 size-28 sm:size-40 border-muted'>
                  <Link href='/projects'>
                    <ArrowUpIcon className='animate-bounce size-6 sm:size-8' />
                    Ver todos
                  </Link>
                </Button>
              </div>
            </Carousel>


          </section>

          <section className='container mt-24'>
            <h2 className='title-center'>NOSSOS VALORES</h2>
            <p className='mt-4 text-3xl font-bold text-center sm:text-5xl'>Valores que nos inspiram</p>


            <div className='grid gap-20 mt-24 lg:grid-cols-2'>
              <div className='z-20 flex flex-col gap-4 p-6 border bg-secondary'>
                <div className='p-4 border rounded-full -mt-14 bg-secondary size-16'>
                  <Image src='/quotes.png' alt='' width={32} height={32} />
                </div>
                <h3 className='text-2xl font-heading text-accent'>Excelência</h3>
                <p>Desde a concepção até a conclusão, cada detalhe é cuidadosamente considerado para garantir que nossos projetos alcancem os mais altos padrões de qualidade. Nosso compromisso com a excelência é evidente em cada linha desenhada e em cada espaço criado.</p>
              </div>

              <div className='z-20 flex flex-col gap-4 p-6 border bg-secondary'>
                <div className='p-4 border rounded-full -mt-14 bg-secondary size-16'>
                  <Image src='/quotes.png' alt='' width={32} height={32} />
                </div>
                <h3 className='text-2xl font-heading text-accent'>Inovação</h3>
                <p>Em cada projeto, buscamos desafiar os limites convencionais, explorando novas ideias e soluções. Somos impulsionados pela inovação, incorporando tecnologia de ponta e técnicas contemporâneas para criar espaços que inspiram e encantam.</p>
              </div>

            </div>
          </section>


          <section className='py-20 mt-32 bg-[url(/press.jpg)] bg-center relative z-20'>
            <div className='container'>

              <h2 className='title text-muted before:bg-muted'>IMPRENSA</h2>
              <p className='mt-6 text-5xl font-bold text-secondary'>M² Arquitetura na mídia</p>

              <div className='grid grid-cols-1 gap-10 mt-20 xs:grid-cols-2 lg:gap-20 md:grid-cols-3'>
                <div className='md:row-span-2'>
                  <Image className='w-full' src='/project-1.avif' alt='' width={300} height={200} />
                  <h3 className='mt-2 text-secondary'>Arquiteura moderna</h3>
                  <span className='flex items-center gap-2 text-xs text-muted'><CalendarIcon />18 de maio, 2023</span>
                  <a className='mt-4 text-xs tracking-wider border-b border-white cursor-pointer text-secondary font-heading hover:border-accent hover:text-muted w-fit'>LER MAIS</a>
                </div>
                <div >
                  <Image className='w-full md:aspect-square' src='/project-2.avif' alt='' width={300} height={400} />
                  <h3 className='mt-2 text-secondary'>Arquiteura moderna</h3>
                  <span className='flex items-center gap-2 text-xs text-muted'><CalendarIcon />18 de maio, 2023</span>
                  <a className='mt-4 text-xs tracking-wider border-b border-white cursor-pointer text-secondary font-heading hover:border-accent hover:text-muted w-fit'>LER MAIS</a>
                </div>

                <div className='md:row-span-2'>
                  <Image className='w-full' src='/project-5.avif' alt='' width={300} height={200} />
                  <h3 className='mt-2 text-secondary'>Arquiteura moderna</h3>
                  <span className='flex items-center gap-2 text-xs text-muted'><CalendarIcon />18 de maio, 2023</span>
                  <a className='mt-4 text-xs tracking-wider border-b border-white cursor-pointer text-secondary font-heading hover:border-accent hover:text-muted w-fit'>LER MAIS</a>
                </div>

                <div className='md:row-span-2'>
                  <Image className='w-full' src='/project-1.avif' alt='' width={300} height={200} />
                  <h3 className='mt-2 text-secondary'>Arquiteura moderna</h3>
                  <span className='flex items-center gap-2 text-xs text-muted'><CalendarIcon />18 de maio, 2023</span>
                  <a className='mt-4 text-xs tracking-wider border-b border-white cursor-pointer text-secondary font-heading hover:border-accent hover:text-muted w-fit'>LER MAIS</a>
                </div>


                <div className='md:row-span-2 md:row-start-2 md:col-start-2'>
                  <Image className='w-full md:aspect-square' src='/project-5.avif' alt='' width={300} height={200} />
                  <h3 className='mt-2 text-secondary'>Arquiteura moderna</h3>
                  <span className='flex items-center gap-2 text-xs text-muted'><CalendarIcon />18 de maio, 2023</span>
                  <a className='mt-4 text-xs tracking-wider border-b border-white cursor-pointer text-secondary font-heading hover:border-accent hover:text-muted w-fit'>LER MAIS</a>
                </div>


                <div className='md:row-span-2'>
                  <Image className='w-full ' src='/project-4.avif' alt='' width={300} height={200} />
                  <h3 className='mt-2 text-secondary'>Arquiteura moderna</h3>
                  <span className='flex items-center gap-2 text-xs text-muted'><CalendarIcon />18 de maio, 2023</span>
                  <a className='mt-4 text-xs tracking-wider border-b border-white cursor-pointer text-secondary font-heading hover:border-accent hover:text-muted w-fit'>LER MAIS</a>
                </div>


                <div className='md:row-start-4 md:row-span-2 md:col-start-2'>
                  <Image className='w-full md:aspect-square' src='/project-3.avif' alt='' width={300} height={200} />
                  <h3 className='mt-2 text-secondary'>Arquiteura moderna</h3>
                  <span className='flex items-center gap-2 text-xs text-muted'><CalendarIcon />18 de maio, 2023</span>
                  <a className='mt-4 text-xs tracking-wider border-b border-white cursor-pointer text-secondary font-heading hover:border-accent hover:text-muted w-fit'>LER MAIS</a>
                </div>

                <div className='md:row-span-2'>
                  <Image className='w-full ' src='/project-1.avif' alt='' width={300} height={200} />
                  <h3 className='mt-2 text-secondary'>Arquiteura moderna</h3>
                  <span className='flex items-center gap-2 text-xs text-muted'><CalendarIcon />18 de maio, 2023</span>
                  <a className='mt-4 text-xs tracking-wider border-b border-white cursor-pointer text-secondary font-heading hover:border-accent hover:text-muted w-fit'>LER MAIS</a>
                </div>

                <div className='md:row-span-2'>
                  <Image className='w-full' src='/project-1.avif' alt='' width={300} height={200} />
                  <h3 className='mt-2 text-secondary'>Arquiteura moderna</h3>
                  <span className='flex items-center gap-2 text-xs text-muted'><CalendarIcon />18 de maio, 2023</span>
                  <a className='mt-4 text-xs tracking-wider border-b border-white cursor-pointer text-secondary font-heading hover:border-accent hover:text-muted w-fit'>LER MAIS</a>
                </div>

              </div>
            </div>
          </section>

          <section className='container mt-32 '>
            <div className='flex flex-col items-center lg:flex-row'>
              <div className='relative self-stretch flex-1 min-h-full before:z-20 before:bg-white before:w-4/5 before:h-full lg:before:border before:border-accent before:absolute before:top-0 before:-right-10'>
                <Image className='relative z-30 object-cover object-center w-full h-full lg:-translate-y-10' src='/time.jpg' alt='' width={300} height={500}
                />
              </div>
              <span className='hidden lg:block w-full h-px bg-accent flex-[0.2]'></span>
              <div className='relative z-20 flex flex-col self-stretch gap-6 p-6 border flex-1 lg:flex-[1.5] border-accent bg-secondary'>
                <h2 className='title'>NOSSO TIME</h2>
                <strong className='text-xl lg:text-3xl'>Conheça as mentes criativas por trás da arquitetura</strong>
                <p className='text-sm md:text-base lg:text-lg'>Fundado em 2016, somos um escritório de Arquitetura e Design, jovem e dinâmico, que faz projetos e executa obras residenciais e comerciais de vários tipos e padrões, mesclando os diferentes estilos e desafios trazidos pelos clientes. Auxiliamos os clientes em todas as fases do Projeto, desde concepção até entrega final (Sistema Turn Key), passando pela execução de obra (com equipe própria ou terceirizadas) e controle de orçamentos, planilhas de custos e gerenciamento de contratações e gastos estimados. Acreditamos na personalização dos Projetos, assim como são unicos os clientes e são diversas as necessidades de cada um. Tudo começa com uma necessidade e um desafio!
                </p>
              </div>
            </div>
          </section>

          <section id='contact' className='container mt-32'>
            <h2 className='title'>CONTATO</h2>
            <p className='mt-4 text-3xl font-bold sm:text-5xl'>Entre em contato</p>

            <div className='grid gap-8 mt-20 md:grid-cols-2'>

              <ul className='flex flex-col gap-8'>
                <li className='flex flex-col gap-1'>
                  <Icons.mail className='text-primary' />
                  <span className='text-xl font-bold'> E-mail</span>
                  <a className='text-accent' target="_blank" href="mailto:hcontato@mao2.arq.br">hcontato@mao2.arq.br</a>
                </li>

                <li className='flex flex-col gap-1'>
                  <Icons.whatsapp className='text-primary size-8' />
                  <span className='text-xl font-bold'>Whatsapp</span>
                  <a className='text-accent' target="_blank" href="https://wa.link/mc2cqr">‪+55 11 99376‑6981‬</a>
                </li>

                <li className='flex flex-col gap-1'>
                  <Icons.location className='text-primary' />
                  <span className='text-xl font-bold'>Escritório</span>
                  <a className='flex items-center gap-2 text-accent' target="_blank" href="https://maps.app.goo.gl/T9q41LCMNnkS8yts5">Como chegar <Icons.arrow className='w-3 h-3 rotate-180' /></a>
                </li>
              </ul>

              <iframe className='max-w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117649.83362084167!2d-43.32487861013211!3d-22.855862591868934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce575286a19bad%3A0xbc4324897df9780d!2sM%20Ao%202%20Arquitetura!5e0!3m2!1spt-BR!2sbr!4v1714492993097!5m2!1spt-BR!2sbr" width={600} height={450} frameBorder="0"
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </section>
        </div >
      </main >
    </>

  );
}
