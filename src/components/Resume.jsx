import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Cover } from "./ui/cover";

export function Resume() {
    const data = [
        {
            title: "Experience",
            content: (
                <div className="flex flex-col gap-[30px]">
                    <div>
                        <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]"><Cover>NTL Nova Tecnologia</Cover></h4>
                        <span className="text-blue-400 my-[10px]">2021 - 2023</span>
                        <p
                            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                            Desenvolvedor PHP
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]"><Cover>Travel Trade Group</Cover></h4>
                        <span className="text-blue-400 my-[10px]">2023 - 2025</span>
                        <p
                            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                            Desenvolvedor de Software
                        </p>
                    </div>

                    
                    <div>
                        <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]"><Cover>CTC Tech</Cover></h4>
                        <span className="text-blue-400 my-[10px]">April 2025 - 2025</span>
                        <p
                            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                            Desenvolvedor Backend Pleno
                        </p>
                    </div>


                    <div>
                        <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]"><Cover>Freelancing</Cover></h4>
                        <span className="text-blue-400 my-[10px]">2025 - 2025</span>
                        <p
                            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                            Work as Full Stack Developer
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]"><Cover>Condominium Dashboard</Cover></h4>
                        <span className="text-blue-400 my-[10px]">2025 - 2025</span>
                        <p
                            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                            Work as Full Stack Developer
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: "Education",
            content: (
                <div className="flex flex-col gap-[30px]">
                    <div>
                        <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]"><Cover>UERJ</Cover></h4>
                        <span className="text-blue-400 my-[10px]">2019 - 2026</span>
                        <p
                            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                            Bachelor of Computer Science
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]"><Cover>Descomplica</Cover></h4>
                        <span className="text-blue-400 my-[10px]">2023 - 2026</span>
                        <p
                            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                            Systems Analysis and Development
                        </p>
                    </div>


                </div>
            ),
        },
        {
            title: "Changelog",
            content: (
                <div>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Deployed 5 new components on Aceternity today
                    </p>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Card grid component
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Startup template Aceternity
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Random file upload lol
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Himesh Reshammiya Music CD
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Salman Bhai Fan Club registrations open
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="https://assets.aceternity.com/features-section.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                        <Image
                            src="https://assets.aceternity.com/cards.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full" id="resume">
            <Timeline data={data} />
        </div>
    );
}
