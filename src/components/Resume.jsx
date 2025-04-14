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
        
    ];
    return (
        <div className="w-full" id="resume">
            <Timeline data={data} />
        </div>
    );
}
