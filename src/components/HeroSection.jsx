import React from 'react'
import Image from "next/image";
import { Cover } from "@/components/ui/cover";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Skills } from "@/components/Skills";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
const HeroSection = () => {
  return (
    <div className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px]">

    <div className="max-w-[600px] w-[90$] mx-auto py-[30px]">
      <a href="/">
        <Image src="/images/logo.png" width={120} height={80} className="max-h-[80px] h-full object-contain object-center" alt="logo" />
      </a>
      <div className=" flex flex-col justify-center h-[80%]">
        <span className="text-[#4e69e0]">Its Me</span>

        <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Vinicius Farias, <br /> Full Stack <Cover>Developer</Cover>.
        </h2>
        <a href="#" className="text-white border-b border-1 border-[#525252] hover:bg-[#5070ff2f] transition-all ease-in-out mr-auto py-[10px] font-[600]">
          Hire Me &rarr;
        </a>
       {/*  <div className="flex flex-row mt-[60px]">
          <AnimatedTooltip items={people} />

        </div>
        <p className="max-w-xl text-[1rem] text-start mt-[10px] md:text-lg text-neutral-700 dark:text-neutral-400">
          Our Team Members
        </p> */}
      </div>
    </div>
    <div className="w-ful h-full flex items-end bg-[#0d0d0e]">
      <Image src="/images/model.png" width={800} height={1200} className="w-full max-h-[90vh] object-contain object-bottom" alt="model" />
    </div>
    <div className="w-[90%] mx-auto py-[30px] flex flex-col items-center z-2">
      <a href="#" className="max-w-[130px] w-full h-[40px] flex justify-center items-center border border-1 border-[#333333] text-white font-[600] rounded-[30px] mx-auto pb-[2px]">
        Hire Me
      </a>


      <h2 className="bg-clip-text mt-[100px] text-transparent text-start mr-auto bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-2xl lg:text-3xl font-sans relative z-20 font-bold tracking-tight">
        Sobre mim
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
        Tenho três anos de experiência profissional em desenvolvimento de software e programo há quatro anos. Todos os dias busco aprender algo novo para ampliar minhas oportunidades e entregar projetos com mais qualidade.
      </p>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
        No meu último cargo atuei em uma empresa internacional sediada em Londres, participando da evolução de uma plataforma digital end-to-end. Colaborei com times globais, conectando back-end e front-end e aprimorando integrações críticas.
      </p>
      <div className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[24px] space-y-3">
        <p className="font-semibold text-neutral-900 dark:text-white">Projetos recentes que entreguei:</p>
        <ul className="space-y-2 pl-4 text-sm md:text-base list-disc marker:text-[#4e69e0]">
          <li>
            <span className="font-semibold text-neutral-900 dark:text-white">Controle Financeiro</span> - monorepo mobile (Expo) + core compartilhado, com motor de precificação, tokens reutilizáveis e base pronta para sync offline seguro.
          </li>
          <li>
            <span className="font-semibold text-neutral-900 dark:text-white">Micro Enterprise</span> - template Next.js completo para pequenos negócios com ecommerce 2.0, dashboard, locator em mapa, blog, chat e SEO automatizado.
          </li>
          <li>
            <span className="font-semibold text-neutral-900 dark:text-white">Admin SD</span> - painel administrativo para condomínios com módulos de visitantes, agendamentos, entregas, reuniões online e autenticação corporativa.
          </li>
        </ul>
      </div>

      <Skills/>
    </div>

    <ShootingStars className="z-[-1]" />
    <StarsBackground />

  </div>
  )
}

export default HeroSection
