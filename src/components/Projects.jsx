"use client";

import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20" id="projects">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Projetos recentes
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const ProjectContent = ({
  heroImage,
  link,
  description,
  highlights,
  stack,
  outcome,
  details,
  title,
}) => (
  <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 space-y-6">
    {heroImage && (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4e69e0] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5F5F7] rounded-2xl"
      >
        <div className="relative w-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm aspect-video">
          <Image
            src={heroImage}
            alt={`Tela inicial do projeto ${title}`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 800px, 100vw"
          />
        </div>
      </a>
    )}
    <p className="text-neutral-600 text-base md:text-xl font-sans max-w-3xl mx-auto">
      {description}
    </p>
    {details?.length ? (
      <div className="space-y-4 text-neutral-600 text-sm md:text-base">
        {details.map((paragraph, index) => (
          <p key={`${title}-detail-${index}`}>{paragraph}</p>
        ))}
      </div>
    ) : null}
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <h3 className="text-neutral-800 font-semibold uppercase tracking-wide text-xs md:text-sm">
          Principais entregas
        </h3>
        <ul className="mt-3 space-y-2 text-neutral-600 text-sm md:text-base list-disc pl-5">
          {highlights.map((item, index) => (
            <li key={`${title}-highlight-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-neutral-800 font-semibold uppercase tracking-wide text-xs md:text-sm">
          Stack
        </h3>
        <ul className="mt-3 text-neutral-600 text-sm md:text-base space-y-2 list-disc pl-5">
          {stack.map((item, index) => (
            <li key={`${title}-stack-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    {outcome && (
      <p className="text-neutral-700 text-sm md:text-base font-medium border-l-4 border-[#4e69e0] pl-4">
        {outcome}
      </p>
    )}
    {link && (
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#4e69e0] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#425ad4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4e69e0] focus-visible:ring-offset-2"
        >
          Abrir projeto
        </a>
      </div>
    )}
  </div>
);

const data = [
  {
    category: "Barbearia · Marketplace",
    title: "Barber Simonato",
    src: "https://s.wordpress.com/mshots/v1/https://barber-simonato.vercel.app/?w=1200",
    content: (
      <ProjectContent
        title="Barber Simonato"
        heroImage="https://s.wordpress.com/mshots/v1/https://barber-simonato.vercel.app/?w=1600"
        link="https://barber-simonato.vercel.app/"
        description="Landing page transacional para a barbearia Simonato, com jornada completa de agendamento, vitrine de serviços premium e diferenciais competitivos, construída em 8 horas do layout ao deploy."
        details={[
          "Estruturei a narrativa comercial com hero de alto impacto, prova social, explicação do plano de assinatura e seção de suporte para reduzir atrito e aumentar conversões.",
          "Sincronizei o site público com o painel administrativo Next.js (CRUDs de barbearias e barbeiros) e materiais de onboarding para manter marketing, operação e agendamentos alinhados.",
        ]}
        highlights={[
          "CTAs estratégicas (WhatsApp, suporte, admin) distribuídas por rolagem para capturar leads em diferentes estágios.",
          "Vitrine de serviços com destaque para combos, avaliações verificadas e blocos informativos sobre assinatura e segurança.",
          "Documentação completa (painel, Instagram, notificações) garantindo operação autônoma pós-lançamento.",
        ]}
        stack={[
          "Next.js 14 (App Router)",
          "TypeScript / Tailwind CSS",
          "Shadcn UI components",
          "Prisma / PostgreSQL / NextAuth",
        ]}
        outcome="Site institucional e funcional lançado em um único dia de sprint, já apto para captar leads e reforçar a confiança da barbearia no ambiente digital."
      />
    ),
  },
  {
    category: "Fintech · Mobile",
    title: "Controle Financeiro",
    src: "https://s.wordpress.com/mshots/v1/https://financontrol-beta.vercel.app/?w=1200",
    content: (
      <ProjectContent
        title="Controle Financeiro"
        heroImage="https://s.wordpress.com/mshots/v1/https://financontrol-beta.vercel.app/?w=1600"
        link="https://financontrol-beta.vercel.app/"
        description="Monorepo que leva o core web para mobile, mantendo a mesma experiência de produto e engine financeira compartilhada."
        details={[
          "Estruturei a arquitetura com TurboRepo para compartilhar módulos entre apps e garantir builds ágeis.",
          "Desenhei o roadmap de sincronização offline com foco em segurança, priorizando fluxo de tokens e resiliência em conexões instáveis.",
        ]}
        highlights={[
          "Motor de precificação e pacotes core reutilizáveis em outros canais.",
          "API client com refresh token e fila para sincronização offline segura.",
          "Design tokens extraídos para manter UI consistente entre web e mobile.",
        ]}
        stack={[
          "Expo / React Native",
          "TypeScript / TurboRepo",
          "Shadcn UI tokens",
          "Secure Store (roadmap)",
        ]}
        outcome="Base pronta para acelerar features financeiras mobile enquanto compartilha regras de negócio com a aplicação web."
      />
    ),
  },
  {
    category: "SaaS · Templates",
    title: "Micro Enterprise",
    src: "https://s.wordpress.com/mshots/v1/https://micro-enterprises.vercel.app/?w=1200",
    content: (
      <ProjectContent
        title="Micro Enterprise"
        heroImage="https://s.wordpress.com/mshots/v1/https://micro-enterprises.vercel.app/?w=1600"
        link="https://micro-enterprises.vercel.app/"
        description="Template Next.js escalável para pequenos negócios venderem online com experiência premium desde o dia zero."
        details={[
          "Mapeei os principais fluxos de uma PME (vendas, agendamentos, suporte) e converti em páginas modulares fáceis de personalizar.",
          "Preparei integrações reais com pagamentos, analytics e e-mail marketing para acelerar o go-to-market de novos clientes.",
        ]}
        highlights={[
          "Ecommerce 2.0 com carrinho global, toasts e resumo de pedido responsivo.",
          "Locator com Leaflet, sugestões, raio dinâmico e detalhe de loja com reviews.",
          "Dashboard de vendas, chat interno com áudio e blog integrado prontos para white-label.",
        ]}
        stack={[
          "Next.js 15 / React 19",
          "TypeScript / Tailwind CSS",
          "Shadcn-like components",
          "Leaflet / Recharts / Resend",
        ]}
        outcome="Reduzi o tempo de lançamento de novos comércios digitais de semanas para poucos dias, com uma base white-label pronta para escalar."
      />
    ),
  },
  {
    category: "Condomínio · Admin",
    title: "Admin SD",
    src: "https://s.wordpress.com/mshots/v1/https://admin-sd.vercel.app/?w=1200",
    content: (
      <ProjectContent
        title="Admin SD"
        heroImage="https://s.wordpress.com/mshots/v1/https://admin-sd.vercel.app/?w=1600"
        link="https://admin-sd.vercel.app/"
        description="Painel administrativo completo para condomínios com fluxos internos, integrações corporativas e experiência responsiva."
        details={[
          "Modelei módulos críticos (visitantes, encomendas, agendamentos, reuniões online) e orquestrei as permissões por cargo.",
          "Implementei rotinas de cron e webhooks para sincronizar dados com sistemas de portaria e comunicação interna.",
        ]}
        highlights={[
          "Módulos para visitantes, moradores, agendamentos, encomendas e reuniões online.",
          "NextAuth com RBAC, UploadThing, OCR e rotinas de cron para integrações externas.",
          "Design responsivo com dashboards, filtros avançados e experiência mobile-first.",
        ]}
        stack={[
          "Next.js (App Router)",
          "Prisma / PostgreSQL",
          "NextAuth / UploadThing",
          "Shadcn UI / Tailwind",
        ]}
        outcome="Substituí planilhas por um hub colaborativo que centraliza operações e reduz o tempo de atendimento da administração do condomínio."
      />
    ),
  },
  {
    category: "Marketplace · Saúde",
    title: "Hostly (pre-lançamento)",
    src: "https://s.wordpress.com/mshots/v1/https://hostly-beta.vercel.app/?w=1200",
    content: (
      <ProjectContent
        title="Hostly"
        heroImage="https://s.wordpress.com/mshots/v1/https://hostly-beta.vercel.app/?w=1600"
        link="https://hostly-beta.vercel.app/"
        description="Marketplace inteligente conectando famílias a cuidadores verificados, com mapa interativo, perfis ricos e fluxo de onboarding completo."
        details={[
          "Estou finalizando o módulo de mapa com markers dinâmicos que mostram preço, taxa da plataforma e valor líquido para o cuidador.",
          "O painel administrativo inclui dashboards, cadastro de providers, controle de agenda e fluxo de aprovação para novos cuidadores.",
          "Planejo integrar pagamentos (Stripe/Mercado Pago) e sistema de avaliações para fechar o MVP nas próximas semanas.",
        ]}
        highlights={[
          "Mapa com Leaflet + clustering, filtros geográficos e cards interativos.",
          "Perfil de cuidador com tabs (dados pessoais, especialidades, notificações) e editor completo.",
          "Painel admin (Next.js) com navbar dinâmica, side sheet e tabelas reativas para gestão de cuidadores.",
        ]}
        stack={[
          "Next.js 15 / React 19",
          "TypeScript / Tailwind CSS",
          "Leaflet / Shadcn UI",
          "Próximas integrações: Stripe, Mercado Pago",
        ]}
        outcome="Em construção: MVP focado em confiança e automação para reduzir tempo de contratação de cuidadores profissionais."
      />
    ),
  },
];
