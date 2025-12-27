"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    alpha: number;
    color: string;
    size: number;
    trail?: boolean;
}

interface Sparkle {
    x: number;
    y: number;
    vy: number;
    alpha: number;
    size: number;
    color: string;
    life: number;
    flickerTimer: number;
}

interface Rocket {
    x: number;
    y: number;
    vy: number;
    targetY: number;
    color: string;
    exploded: boolean;
    type: "burst" | "ring" | "willow" | "sparkle";
    trail: Array<{ x: number; y: number; alpha: number }>;
}

interface FireworksProps {
    colors?: string[];
    monochrome?: boolean;
    monochromeColor?: string;
    amount?: "low" | "medium" | "high";
    types?: Array<"burst" | "ring" | "willow" | "sparkle">;
}

export default function Fireworks({
    colors = [
        "#ff0080",
        "#00ffff",
        "#ffff00",
        "#ff00ff",
        "#00ff00",
        "#ff6600",
        "#0099ff",
        "#ff3366",
    ],
    monochrome = false,
    monochromeColor = "#ffffff",
    amount = "medium",
    types = ["burst", "ring", "willow", "sparkle"],
}: FireworksProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let sparkles: Sparkle[] = [];
        let rockets: Rocket[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const getColor = () => {
            if (monochrome) return monochromeColor;
            return colors[Math.floor(Math.random() * colors.length)];
        };

        const intervals = {
            low: 1000,
            medium: 500,
            high: 300,
        };

        const createRocket = () => {
            const x = Math.random() * canvas.width;
            const targetY =
                Math.random() * (canvas.height * 0.4) + canvas.height * 0.1;
            const type = types[Math.floor(Math.random() * types.length)];

            rockets.push({
                x,
                y: canvas.height,
                vy: -8 - Math.random() * 4,
                targetY,
                color: getColor(),
                exploded: false,
                type,
                trail: [],
            });
        };

        const explodeBurst = (x: number, y: number, color: string) => {
            const particleCount = 60;

            for (let i = 0; i < particleCount; i++) {
                const angle =
                    (Math.PI * 2 * i) / particleCount +
                    (Math.random() - 0.5) * 0.3;
                const speed = Math.random() * 5 + 2;

                particles.push({
                    x,
                    y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    alpha: 1,
                    color,
                    size: Math.random() * 2 + 1,
                });
            }
        };

        const explodeRing = (x: number, y: number, color: string) => {
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const angle = (Math.PI * 2 * i) / particleCount;
                const speed = 4;

                particles.push({
                    x,
                    y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    alpha: 1,
                    color,
                    size: Math.random() * 2.5 + 1.5,
                });
            }
        };

        const explodeWillow = (x: number, y: number, color: string) => {
            const particleCount = 70;

            for (let i = 0; i < particleCount; i++) {
                const angle =
                    (Math.PI * 2 * i) / particleCount +
                    (Math.random() - 0.5) * 0.2;
                const speed = Math.random() * 3 + 1.5;

                particles.push({
                    x,
                    y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    alpha: 1,
                    color,
                    size: Math.random() * 1.5 + 0.5,
                    trail: true,
                });
            }
        };

        const explodeSparkle = (x: number, y: number, color: string) => {
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const angle =
                    (Math.PI * 2 * i) / particleCount +
                    (Math.random() - 0.5) * 0.4;
                const speed = Math.random() * 4 + 2.5;

                particles.push({
                    x,
                    y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    alpha: 1,
                    color,
                    size: Math.random() * 2 + 1,
                });
            }

            const sparkleColors = ["#ffffff", "#ffffaa", "#ffff66", color];
            for (let i = 0; i < 30; i++) {
                const offsetX = (Math.random() - 0.5) * 250;
                const offsetY = (Math.random() - 0.5) * 250;

                sparkles.push({
                    x: x + offsetX,
                    y: y + offsetY,
                    vy: Math.random() * 0.2 - 0.1,
                    alpha: 1,
                    size: Math.random() * 3 + 2,
                    color: sparkleColors[
                        Math.floor(Math.random() * sparkleColors.length)
                    ],
                    life: Math.random() * 50 + 40,
                    flickerTimer: 0,
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            rockets = rockets.filter((rocket) => {
                if (!rocket.exploded) {
                    rocket.trail.push({
                        x: rocket.x,
                        y: rocket.y,
                        alpha: 1,
                    });

                    if (rocket.trail.length > 15) {
                        rocket.trail.shift();
                    }

                    rocket.y += rocket.vy;

                    if (rocket.trail.length > 1) {
                        for (let i = 0; i < rocket.trail.length - 1; i++) {
                            const t = rocket.trail[i];
                            const alphaFade = i / rocket.trail.length;

                            ctx.beginPath();
                            ctx.arc(t.x, t.y, 2.5, 0, Math.PI * 2);
                            ctx.fillStyle = rocket.color;
                            ctx.globalAlpha = alphaFade * 0.8;
                            ctx.fill();
                        }
                        ctx.globalAlpha = 1;
                    }

                    ctx.beginPath();
                    ctx.arc(rocket.x, rocket.y, 3, 0, Math.PI * 2);
                    ctx.fillStyle = rocket.color;
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = rocket.color;
                    ctx.fill();
                    ctx.shadowBlur = 0;

                    if (rocket.y <= rocket.targetY) {
                        switch (rocket.type) {
                            case "burst":
                                explodeBurst(rocket.x, rocket.y, rocket.color);
                                break;
                            case "ring":
                                explodeRing(rocket.x, rocket.y, rocket.color);
                                break;
                            case "willow":
                                explodeWillow(rocket.x, rocket.y, rocket.color);
                                break;
                            case "sparkle":
                                explodeSparkle(
                                    rocket.x,
                                    rocket.y,
                                    rocket.color,
                                );
                                break;
                        }
                        rocket.exploded = true;
                        return false;
                    }
                    return true;
                }
                return false;
            });

            sparkles = sparkles.filter((s) => {
                s.vy += 0.04;
                s.y += s.vy;
                s.life--;
                s.flickerTimer++;

                const baseAlpha = s.life / 60;
                const flickerAlpha = s.flickerTimer % 4 < 2 ? 1 : 0.2;
                s.alpha = baseAlpha * flickerAlpha;

                if (s.life > 0) {
                    ctx.beginPath();
                    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                    ctx.fillStyle = s.color;
                    ctx.globalAlpha = s.alpha;
                    ctx.shadowBlur = s.alpha > 0.5 ? 8 : 0;
                    ctx.shadowColor = s.color;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                    ctx.globalAlpha = 1;
                    return true;
                }
                return false;
            });

            particles = particles.filter((p) => {
                const oldX = p.x;
                const oldY = p.y;

                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.08;
                p.vx *= 0.99;
                p.vy *= 0.99;
                p.alpha -= 0.018;

                if (p.alpha > 0) {
                    if (p.trail) {
                        ctx.beginPath();
                        ctx.moveTo(oldX, oldY);
                        ctx.lineTo(p.x, p.y);
                        ctx.strokeStyle = p.color;
                        ctx.globalAlpha = p.alpha * 0.5;
                        ctx.lineWidth = p.size;
                        ctx.stroke();
                    }

                    ctx.globalAlpha = p.alpha;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.fill();
                    ctx.globalAlpha = 1;

                    return true;
                }
                return false;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const fireworkInterval = setInterval(() => {
            createRocket();
        }, intervals[amount]);

        createRocket();
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
            clearInterval(fireworkInterval);
        };
    }, [colors, monochrome, monochromeColor, amount, types]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: "transparent" }}
        />
    );
}
