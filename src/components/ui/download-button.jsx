import React, { useRef, useState, useEffect } from "react";

export function DownloadButton() {
    const [buttonState, setButtonState] = useState("download");
    const buttonRef = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const gsapModule = require("gsap");
        const gsap = gsapModule.default || gsapModule;

        function getPoint(point, i, a, smoothing) {
            let cp = (current, previous, next, reverse) => {
                let p = previous || current,
                    n = next || current,
                    o = {
                        length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
                        angle: Math.atan2(n[1] - p[1], n[0] - p[0])
                    },
                    angle = o.angle + (reverse ? Math.PI : 0),
                    length = o.length * smoothing;
                return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
            },
                cps = cp(a[i - 1], a[i - 2], point, false),
                cpe = cp(point, a[i - 1], a[i + 1], true);
            return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
        }

        function getPath(update, smoothing, pointsNew) {
            let points = pointsNew ? pointsNew : [
                [4, 12],
                [12, update],
                [20, 12]
            ],
                d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
            return `<path d="${d}" />`;
        }

        const button = buttonRef.current;
        if (!button) return;

        let duration = 3000,
            svg = button.querySelector('svg'),
            svgPath = new Proxy({
                y: null,
                smoothing: null
            }, {
                set(target, key, value) {
                    target[key] = value;
                    if (target.y !== null && target.smoothing !== null) {
                        svg.innerHTML = getPath(target.y, target.smoothing, null);
                    }
                    return true;
                },
                get(target, key) {
                    return target[key];
                }
            });

        button.style.setProperty('--duration', duration);

        svgPath.y = 20;
        svgPath.smoothing = 0;

        const handleAnimation = (e) => {
            e.preventDefault();

            if (!button.classList.contains('loading')) {
                button.classList.add('loading');

                gsap.to(svgPath, {
                    smoothing: .3,
                    duration: duration * .065 / 1000
                });

                gsap.to(svgPath, {
                    y: 12,
                    duration: duration * .265 / 1000,
                    delay: duration * .065 / 1000,
                    ease: gsap.Elastic ? gsap.Elastic.easeOut.config(1.12, .4) : "elastic.out(1.12, 0.4)"
                });

                setTimeout(() => {
                    svg.innerHTML = getPath(0, 0, [
                        [3, 14],
                        [8, 19],
                        [21, 6]
                    ]);
                }, duration / 2);
            }
        };

        button.addEventListener('click', handleAnimation);

        return () => {
            button.removeEventListener('click', handleAnimation);
        };
    }, []);

    const handleButtonClick = (e) => {
        e.preventDefault();
        if (buttonState === "download") {
            setButtonState("downloading");
            setTimeout(() => setButtonState("open"), 3000); // Simula o download
        } else if (buttonState === "open") {
            // Baixa o PDF do projeto (exemplo: public/resume.pdf)
            const link = document.createElement("a");
            link.href = "/resume.pdf";
            link.download = "resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <a
    href="#"
    ref={buttonRef}
    className="button dark w-auto"
    style={{ "--background": "rgb(23 23 23 / var(--tw-bg-opacity, 1))" }}
    onClick={handleButtonClick}
>
    <ul style={{ padding: "16px 20px", minWidth: "200px" }}>
        <li style={{ display: buttonState === "download" ? "block" : "none" }}>
            &#68;ownload Resume
        </li>
        <li
            style={{
                display: buttonState === "downloading" ? "block" : "none",
                margin: "0 10px", // Espaçamento horizontal
            }}
        >
            &#68;ownloading
        </li>
        <li style={{ display: buttonState === "open" ? "block" : "none" }}>
            Open File
        </li>
    </ul>
    <div>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 2V16M12 16L8 12M12 16L16 12M4 20H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </div>
</a>
    );
}