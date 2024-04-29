'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import SocialLinks from "@/components/social-links";
import Image from "next/image";
import { Accordion, AccordionTrigger, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import Marquee from "react-fast-marquee";
import { CalendarIcon } from "@radix-ui/react-icons";

const banners = [{
  title: ('Contruindo sua visão, <br /> criando realidade'),
  description: 'Bem-vindo ao nosso mundo de maravilhas arquitetônicas, onde a criatividade encontra a funcionalidade.',
  image: '/banner.png',
},
{
  title: ('Contruindo sua visão, <br /> criando realidade'),
  description: 'Bem-vindo ao nosso mundo de maravilhas arquitetônicas, onde a criatividade encontra a funcionalidade.',
  image: '/edificio.jpg',
}]

export default function Home() {
  return (
    <main >
      <Carousel
        className='relative'
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 10000,
          }),
        ]}>

        <SocialLinks className={'hidden lg:flex absolute z-20 left-7 top-1/2 -translate-y-1/2'} />

        <CarouselContent>

          {banners.map((item) => (

            <CarouselItem className='relative pl-0' key={item.image}>
              <div style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5) 100%, rgba(0,0,0,0.5)) , url(${item.image}) no-repeat center center/cover`
              }}
                className='relative grid w-full min-h-screen overflow-hidden place-content-center' >

                <div className='container flex flex-col gap-10 before:bg-black/70 before:h-1/2 before:w-[340px] before:top-0 before:-translate-x-1/2 before:absolute'>
                  <h1 className='relative text-5xl leading-tight uppercase text-secondary font-heading'>Contruindo sua visão, <br /> criando realidade</h1>
                  <p className='text-lg max-w-[50ch] text-secondary font-light'>Bem-vindo ao nosso mundo de maravilhas arquitetônicas, onde a criatividade encontra a funcionalidade.</p>

                  <SocialLinks className={'flex-row lg:hidden '} />
                </div>
              </div>
            </CarouselItem>
          ))}

        </CarouselContent>
      </Carousel>

      <div className='relative'>
        <div className='absolute inset-0 z-10 flex justify-center pointer-events-none'>
          <div className='max-w-7xl grid w-full h-full grid-cols-2 sm:grid-cols-[repeat(3,1fr)] gap-40 px-10'>
            <div className='border-x border-accent/10' />
            <div className='border-x border-accent/10' />
            <div className='border-x border-accent/10' />
          </div>
        </div>

        <section id='about' className='container flex flex-col gap-5 pt-32 bg-[url(/blueprint.jpg)] bg-cover min-h-screen '>
          <h2 className='title'>SERVIÇOS</h2>
          <p className='text-3xl font-bold'>Descubra a elegância na arquitetura moderna</p>


          <div className='grid gap-10 mt-10 md:grid-cols-[0.8fr_1fr]'>
            <Image className='relative w-full' src='/about.png' alt='' width={500} height={650} />

            <Accordion defaultValue='item-1' type="multiple" collapsible>
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
            breakpoints: {
              '(min-width: 768px)': { slidesToScroll: 2 }
            }
          }} className='mt-16' >
            <CarouselContent>
              <CarouselItem className='relative min-h-[600px] pl-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/4'>
                <Image className='absolute inset-0 object-cover object-center w-full h-full objc' src='/project-1.avif' alt='' width={300} height={800} />
              </CarouselItem>
              <CarouselItem className='relative min-h-[600px] pl-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/4'>
                <Image className='absolute inset-0 object-cover object-center w-full h-full' src='/project-2.avif' alt='' width={300} height={800} />
              </CarouselItem>
              <CarouselItem className='relative min-h-[600px] pl-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/4'>
                <Image className='absolute inset-0 object-cover object-center w-full h-full' src='/project-3.avif' alt='' width={300} height={800} />
              </CarouselItem>
              <CarouselItem className='relative min-h-[600px] pl-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/4'>
                <Image className='absolute inset-0 object-cover object-center w-full h-full' src='/project-4.avif' alt='' width={300} height={800} />
              </CarouselItem>

              <CarouselItem className='relative min-h-[600px] pl-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/4'>
                <Image className='absolute inset-0 object-cover object-center w-full h-full' src='/project-5.avif' alt='' width={300} height={800} />
              </CarouselItem>

            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
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

            <div className='grid grid-cols-1 gap-10 mt-20 xs:grid-cols-2 md:gap-20 md:grid-cols-3'>
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

      </div>

    </main >
  );
}
