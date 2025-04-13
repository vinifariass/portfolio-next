"use client";

import React, { useRef, useEffect } from "react";

export const CanvasRevealEffect = ({
  animationSpeed = 2,
  containerClassName,
  dotSize = 2,
  colors = [
    [59, 130, 246], // azul
    [139, 92, 246], // roxo
  ],
}) => {
  const canvasRef = useRef(null);
  const parentRef = useRef(null);
  const dots = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleResize = () => {
      canvas.width = parentRef.current.offsetWidth;
      canvas.height = parentRef.current.offsetHeight;
      createDots();
    };

    const createDots = () => {
      const totalDots = Math.floor(canvas.width * canvas.height / 1000);
      dots.current = [];
      for (let i = 0; i < totalDots; i++) {
        dots.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * dotSize,
          dx: (Math.random() - 0.5) * animationSpeed,
          dy: (Math.random() - 0.5) * animationSpeed,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.current.forEach(dot => {
        dot.x += dot.dx;
        dot.y += dot.dy;

        if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dot.color[0]}, ${dot.color[1]}, ${dot.color[2]}, 0.5)`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    handleResize();
    animate();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [animationSpeed, dotSize, colors]);

  return (
    <div ref={parentRef} className={containerClassName}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};
