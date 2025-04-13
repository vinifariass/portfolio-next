'use client'
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import React, { useState, useEffect } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
                                  children,
                                  radius = 350,
                                  color = "#262626",
                                  className,
                                  ...props
                              }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Garante que só rodará no cliente
        setIsClient(true);
    }, []);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        if (!isClient || !currentTarget) return; // Protege o SSR

        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const maskImage = useMotionTemplate`
    radial-gradient(
      ${radius}px circle at ${mouseX}px ${mouseY}px,
      white,
      transparent 80%
    )
  `;
    return (
        <div
            className={cn(
                "group/spotlight relative p-10 rounded-md border border-neutral-800 bg-black dark:border-neutral-800",
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {isClient && (
                <motion.div
                    className="absolute pointer-events-none z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
                    style={{
                        backgroundColor: color,
                        maskImage: maskImage,
                    }}
                >
                    {isHovering && (
                        <CanvasRevealEffect
                            animationSpeed={5}
                            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
                            colors={[
                                [59, 130, 246],
                                [139, 92, 246],
                            ]}
                            dotSize={3}
                        />
                    )}
                </motion.div>
            )}
            {children}
        </div>
    );
};