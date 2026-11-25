import { useEffect, useRef } from "react";

type P = { x: number; y: number; vx: number; vy: number; r: number; o: number };

export function SnowCanvas({ shake }: { shake: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const parts = useRef<P[]>([]);
  const first = useRef(true);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    let raf = 0;
    const size = () => { const s = c.clientWidth * devicePixelRatio; c.width = s; c.height = s; };
    size();
    const W = () => c.width;
    if (!parts.current.length)
      parts.current = Array.from({ length: 900 }, () => ({
        x: Math.random(), y: 0.55 + Math.random() * 0.4, vx: 0, vy: 0,
        r: 0.6 + Math.random() * 2.2, o: 0.6 + Math.random() * 0.4,
      }));
    const tick = () => {
      const w = W();
      ctx.clearRect(0, 0, w, w);
      for (const p of parts.current) {
        p.vy += 0.000035 * (1 + p.r * 0.2); // gravity
        p.vx *= 0.975; p.vy *= 0.975; // water drag
        p.vx += (Math.random() - 0.5) * 0.00012;
        // swirl around center while moving fast
        const sp = Math.hypot(p.vx, p.vy);
        if (sp > 0.004) { p.vx += -(p.y - 0.5) * 0.0015; p.vy += (p.x - 0.5) * 0.0015; }
        p.x += p.vx; p.y += p.vy;
        // keep inside circle (floor flattened by snow pile)
        const dx = p.x - 0.5, dy = p.y - 0.5, d = Math.hypot(dx, dy);
        if (d > 0.47) { p.x = 0.5 + (dx / d) * 0.47; p.y = 0.5 + (dy / d) * 0.47; p.vx *= -0.3; p.vy *= -0.3; }
        if (p.y > 0.86) { p.y = 0.86; p.vy = 0; p.vx *= 0.8; }
        ctx.globalAlpha = p.o;
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * w, p.r * devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("resize", size);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", size); };
  }, []);

  useEffect(() => {
    if (first.current) { first.current = false; // gentle initial swirl
      for (const p of parts.current) { p.vy = -0.004 - Math.random() * 0.01; p.vx = (Math.random() - 0.5) * 0.01; }
      return;
    }
    for (const p of parts.current) {
      const a = Math.random() * Math.PI * 2, s = 0.03 + Math.random() * 0.06;
      p.vx = Math.cos(a) * s; p.vy = Math.sin(a) * s - 0.035;
    }
  }, [shake]);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full z-[15] pointer-events-none" />;
}
