'use client';

import { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Resize canvas
        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
                initParticles();
            }
        };

        // Particles
        const particles: Array<{
            x: number;
            y: number;
            baseX: number;
            baseY: number;
            vx: number;
            vy: number;
            size: number;
            opacity: number;
        }> = [];

        // Create well-distributed particles (OPTIMIZED - fewer particles)
        const initParticles = () => {
            particles.length = 0;
            const spacing = 100; // Reduced spacing for more particles
            const cols = Math.ceil(canvas.width / spacing);
            const rows = Math.ceil(canvas.height / spacing);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * spacing + (Math.random() - 0.5) * 20;
                    const y = j * spacing + (Math.random() - 0.5) * 20;

                    particles.push({
                        x,
                        y,
                        baseX: x,
                        baseY: y,
                        vx: 0,
                        vy: 0,
                        size: Math.random() * 1.5 + 1,
                        opacity: Math.random() * 0.4 + 0.3,
                    });
                }
            }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const resizeObserver = new ResizeObserver(resizeCanvas);
        if (canvas.parentElement) {
            resizeObserver.observe(canvas.parentElement);
        }

        // Mouse tracking
        let mouseX = -1000;
        let mouseY = -1000;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
        };

        window.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        // Animation - HEAVILY OPTIMIZED
        let animationId: number;
        let lastTime = Date.now();

        const animate = () => {
            const now = Date.now();
            const deltaTime = now - lastTime;

            // Skip frame if running too fast (cap at 60fps)
            if (deltaTime < 16) {
                animationId = requestAnimationFrame(animate);
                return;
            }

            lastTime = now;

            // Clear canvas
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            const time = now * 0.0008; // Floating speed

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Continuous floating effect - visible movement
                const floatX = Math.sin(time + i * 0.1) * 8;
                const floatY = Math.cos(time + i * 0.15) * 8;

                // Mouse repulsion - optimized
                const dx = p.x - mouseX;
                const dy = p.y - mouseY;
                const distSq = dx * dx + dy * dy;

                if (distSq < 22500) { // 150px radius
                    const dist = Math.sqrt(distSq);
                    const force = (150 - dist) / 150;
                    const angle = Math.atan2(dy, dx);
                    p.vx += Math.cos(angle) * force * 1.5;
                    p.vy += Math.sin(angle) * force * 1.5;
                }

                // Return to base with floating offset - very gentle
                const returnForce = 0.01;
                p.vx += (p.baseX + floatX - p.x) * returnForce;
                p.vy += (p.baseY + floatY - p.y) * returnForce;

                // Apply velocity
                p.x += p.vx;
                p.y += p.vy;

                // Damping
                p.vx *= 0.85;
                p.vy *= 0.85;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 200, 200, ${p.opacity})`;
                ctx.fill();
            }

            // REMOVED CONNECTIONS - they are too expensive
            // This is the main performance killer

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationId);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0"
            style={{ backgroundColor: '#000000' }}
        />
    );
}
