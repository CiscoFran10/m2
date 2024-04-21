'use client'

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import SocialLinks from "@/components/social-links";

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

        <SocialLinks className={'hidden sm:flex absolute z-20 left-7 top-1/2 -translate-y-1/2'} />

        <CarouselContent>

          {banners.map((item) => (

            <CarouselItem className='pl-0' key={item.image}>
              <div style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5) 95%, rgba(255, 255, 255)) , url(${item.image}) no-repeat center center/cover`
              }}
                className='relative grid w-full min-h-screen overflow-hidden place-content-center' >

                <div className='container flex flex-col gap-10 before:bg-black/70 before:h-1/2 before:w-[340px] before:top-0 before:-translate-x-1/2 before:absolute'>
                  <h1 className='relative text-5xl leading-tight uppercase text-secondary font-heading'>Contruindo sua visão, <br /> criando realidade</h1>
                  <p className='text-lg max-w-[50ch] text-secondary font-light'>Bem-vindo ao nosso mundo de maravilhas arquitetônicas, onde a criatividade encontra a funcionalidade.</p>

                  <SocialLinks className={'flex-row sm:hidden '} />
                </div>
              </div>
            </CarouselItem>
          ))}


        </CarouselContent>
      </Carousel>

      <main className='container bg-[url(/blueprint.jpg)] bg-cover min-h-screen'>
        <h2 className='title'>NOSSOS SERVIÇOS</h2>
      </main>


      <p className="mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam officia accusamus quos sequi modi aspernatur perspiciatis doloremque dolorem sint porro veritatis, deleniti corporis, iste amet fuga consequuntur officiis? Quisquam sunt corrupti vel totam aspernatur nostrum, numquam maiores inventore eos veniam laborum optio, odio fugiat commodi quasi iste magnam repellendus quos. Odit provident nisi qui dicta tempore molestias aspernatur sunt totam culpa vitae a asperiores quisquam quasi cupiditate, laboriosam fuga optio eius ipsa quam voluptatem inventore itaque aut obcaecati quae. Possimus fuga doloribus saepe, debitis eius totam officiis illum ab ad expedita iure aperiam reprehenderit vero explicabo consequatur aliquid! Illum, labore at. Et temporibus illo alias? Recusandae harum hic eligendi, similique adipisci quae animi ullam nam vero molestiae? Earum distinctio nam animi harum et dolorem saepe unde officia mollitia? Aut repellat eos non possimus tempore fugiat esse praesentium. Suscipit, dolorum sit qui nostrum eaque, ullam, ea cum pariatur voluptatum fugiat ab reiciendis quia? Nemo, maxime! Earum, quos. Dolorem harum perspiciatis ab maxime consectetur temporibus porro nam impedit reiciendis culpa expedita, atque saepe animi distinctio aliquam sint, sunt doloribus modi odio, dolor quos. Non amet sint iste dicta numquam aut totam, quas, rem tempora voluptates aliquid unde tenetur voluptatibus? Mollitia, pariatur iste!</p>
    </main >
  );
}
