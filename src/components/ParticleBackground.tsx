import React, { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class representing floating light streaks / stars
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      fadeSpeed: number;
      maxOpacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.maxOpacity = Math.random() * 0.6 + 0.1;
        this.opacity = Math.random() * this.maxOpacity;
        this.fadeSpeed = Math.random() * 0.005 + 0.002;

        // Luxury dark violet, purple and gold tones
        const colors = [
          "rgba(155, 53, 255, ", // neon violet
          "rgba(213, 140, 255, ", // soft purple
          "rgba(212, 175, 55, ", // metallic gold
          "rgba(245, 197, 66, " // bright gold
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around boundaries
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Elegant fade pulsation
        this.opacity += this.fadeSpeed;
        if (this.opacity > this.maxOpacity || this.opacity < 0.02) {
          this.fadeSpeed = -this.fadeSpeed;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.shadowBlur = this.size * 2;
        context.shadowColor = this.color.includes("212") ? "#D4AF37" : "#9B35FF";
        context.fillStyle = this.color + Math.max(0, this.opacity) + ")";
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0; // reset
      }
    }

    // Heavy glowing luxury light streaks/beams
    class LightStreak {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      color: string;
      pulse: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 150 + 100;
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.speedY = (Math.random() - 0.5) * 0.15;
        this.color = Math.random() > 0.5 ? "rgba(22, 0, 32, 0.45)" : "rgba(10, 0, 15, 0.35)";
        this.pulse = Math.random() * Math.PI;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += 0.005;

        if (this.x < -this.radius) this.x = width + this.radius;
        if (this.x > width + this.radius) this.x = -this.radius;
        if (this.y < -this.radius) this.y = height + this.radius;
        if (this.y > height + this.radius) this.y = -this.radius;
      }

      draw(context: CanvasRenderingContext2D) {
        const pSize = this.radius * (1 + Math.sin(this.pulse) * 0.1);
        const grad = context.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          pSize
        );
        grad.addColorStop(0, "rgba(26, 0, 48, 0.25)");
        grad.addColorStop(0.5, "rgba(15, 0, 25, 0.15)");
        grad.addColorStop(1, "rgba(5, 0, 8, 0)");

        context.fillStyle = grad;
        context.beginPath();
        context.arc(this.x, this.y, pSize, 0, Math.PI * 2);
        context.fill();
      }
    }

    const particles: Particle[] = Array.from({ length: 65 }, () => new Particle());
    const streaks: LightStreak[] = Array.from({ length: 5 }, () => new LightStreak());

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Create an ultra deep gradient base
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, "#050008");
      bgGrad.addColorStop(0.5, "#100018");
      bgGrad.addColorStop(1, "#030005");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw and update heavy light streaks (ambient atmospheric glow)
      streaks.forEach((streak) => {
        streak.update();
        streak.draw(ctx);
      });

      // Draw and update fine particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
