import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  type: "box" | "bag" | "cart" | "star";
  rotation: number;
  rotationSpeed: number;
  size: number;
}

export default function Interactive3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 }); // Initialize off-screen
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reinitialize particles on resize if they exist
      if (particlesRef.current.length > 0) {
        initParticles();
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const types: Array<"box" | "bag" | "cart" | "star"> = ["box", "bag", "cart", "star"];
      
      // Create particles distributed across the screen
      for (let i = 0; i < 30; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 800 + 100, // Keep away from extremes
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          vz: (Math.random() - 0.5) * 0.3,
          type: types[Math.floor(Math.random() * types.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.015,
          size: 25 + Math.random() * 35,
        });
      }
      particlesRef.current = particles;
    };
    initParticles();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };
    
    window.addEventListener("mousemove", handleMouseMove);

    // Draw functions for different shapes
    const drawBox = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      scale: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.scale(scale, scale);

      const s = size;
      
      // Front face
      ctx.fillStyle = `rgba(0, 217, 255, ${0.12 * scale})`;
      ctx.strokeStyle = `rgba(0, 217, 255, ${0.35 * scale})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.rect(-s / 2, -s / 2, s, s);
      ctx.fill();
      ctx.stroke();

      // Top face (3D effect)
      ctx.fillStyle = `rgba(0, 217, 255, ${0.08 * scale})`;
      ctx.beginPath();
      ctx.moveTo(-s / 2, -s / 2);
      ctx.lineTo(0, -s / 2 - s / 4);
      ctx.lineTo(s / 2 + s / 4, -s / 2);
      ctx.lineTo(s / 2, -s / 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Side face
      ctx.fillStyle = `rgba(0, 217, 255, ${0.06 * scale})`;
      ctx.beginPath();
      ctx.moveTo(s / 2, -s / 2);
      ctx.lineTo(s / 2 + s / 4, -s / 2);
      ctx.lineTo(s / 2 + s / 4, s / 2);
      ctx.lineTo(s / 2, s / 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.restore();
    };

    const drawShoppingBag = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      scale: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.scale(scale, scale);

      const s = size;
      
      // Bag body
      ctx.fillStyle = `rgba(255, 0, 128, ${0.12 * scale})`;
      ctx.strokeStyle = `rgba(255, 0, 128, ${0.35 * scale})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-s / 2, -s / 4);
      ctx.lineTo(-s / 2, s / 2);
      ctx.lineTo(s / 2, s / 2);
      ctx.lineTo(s / 2, -s / 4);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Handle
      ctx.beginPath();
      ctx.arc(-s / 4, -s / 4, s / 4, Math.PI, 0, false);
      ctx.stroke();

      ctx.restore();
    };

    const drawCart = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      scale: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.scale(scale, scale);

      const s = size;
      
      ctx.strokeStyle = `rgba(0, 255, 136, ${0.35 * scale})`;
      ctx.fillStyle = `rgba(0, 255, 136, ${0.12 * scale})`;
      ctx.lineWidth = 2;

      // Cart basket
      ctx.beginPath();
      ctx.moveTo(-s / 2, 0);
      ctx.lineTo(-s / 3, s / 3);
      ctx.lineTo(s / 3, s / 3);
      ctx.lineTo(s / 2, 0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Wheels
      ctx.beginPath();
      ctx.arc(-s / 4, s / 2, s / 8, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(s / 4, s / 2, s / 8, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();
    };

    const drawStar = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      scale: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.scale(scale, scale);

      const s = size / 2;
      const spikes = 5;
      
      ctx.fillStyle = `rgba(255, 200, 0, ${0.12 * scale})`;
      ctx.strokeStyle = `rgba(255, 200, 0, ${0.35 * scale})`;
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? s : s / 2;
        const angle = (Math.PI * 2 * i) / (spikes * 2);
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;
        
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.restore();
    };

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      particles.forEach((particle, i) => {
        // Mouse interaction force (attraction)
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only apply mouse force if mouse is on screen and nearby
        if (mouseRef.current.x > -9000 && distance > 0 && distance < 400) {
          const force = Math.min(150 / (distance + 1), 3);
          particle.vx += (dx / distance) * force * 0.004;
          particle.vy += (dy / distance) * force * 0.004;
        }

        // Particle-to-particle repulsion to keep them dispersed
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const pdx = particle.x - otherParticle.x;
            const pdy = particle.y - otherParticle.y;
            const pdist = Math.sqrt(pdx * pdx + pdy * pdy);
            
            // Apply repulsion if particles are too close
            if (pdist > 0 && pdist < 150) {
              const repulsion = (150 - pdist) / 150;
              particle.vx += (pdx / pdist) * repulsion * 0.02;
              particle.vy += (pdy / pdist) * repulsion * 0.02;
            }
          }
        });

        // Gentle drift toward center to prevent particles from leaving
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const toCenterX = centerX - particle.x;
        const toCenterY = centerY - particle.y;
        const distToCenter = Math.sqrt(toCenterX * toCenterX + toCenterY * toCenterY);
        
        if (distToCenter > canvas.width * 0.4) {
          particle.vx += (toCenterX / distToCenter) * 0.01;
          particle.vy += (toCenterY / distToCenter) * 0.01;
        }

        // Apply velocity
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        // Update rotation
        particle.rotation += particle.rotationSpeed;

        // Wrap around screen with padding
        const padding = 200;
        if (particle.x < -padding) particle.x = canvas.width + padding;
        if (particle.x > canvas.width + padding) particle.x = -padding;
        if (particle.y < -padding) particle.y = canvas.height + padding;
        if (particle.y > canvas.height + padding) particle.y = -padding;
        
        // Z-axis boundaries with reversal
        if (particle.z < 100) {
          particle.z = 100;
          particle.vz *= -1;
        }
        if (particle.z > 900) {
          particle.z = 900;
          particle.vz *= -1;
        }

        // Calculate scale based on z-depth for 3D effect
        const scale = 0.4 + (1 - particle.z / 1000) * 0.6;

        // Draw particle based on type
        ctx.globalAlpha = scale * 0.8;
        
        switch (particle.type) {
          case "box":
            drawBox(ctx, particle.x, particle.y, particle.size, particle.rotation, scale);
            break;
          case "bag":
            drawShoppingBag(ctx, particle.x, particle.y, particle.size, particle.rotation, scale);
            break;
          case "cart":
            drawCart(ctx, particle.x, particle.y, particle.size, particle.rotation, scale);
            break;
          case "star":
            drawStar(ctx, particle.x, particle.y, particle.size, particle.rotation, scale);
            break;
        }

        ctx.globalAlpha = 1;

        // Damping - less aggressive
        particle.vx *= 0.97;
        particle.vy *= 0.97;
        particle.vz *= 0.98;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ 
        opacity: 0.6,
        pointerEvents: 'none',
        touchAction: 'none'
      }}
    />
  );
}
