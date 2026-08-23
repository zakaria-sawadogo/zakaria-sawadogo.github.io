"use client";

import { useEffect, useRef } from "react";

export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let raf = 0;

    function onMove(event: MouseEvent) {
      targetX = event.clientX;
      targetY = event.clientY;
    }

    function onOver(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [role='button'], input, textarea, summary");
      dot?.classList.toggle("cursor-dot--active", Boolean(interactive));
    }

    function tick() {
      x += (targetX - x) * 0.2;
      y += (targetY - y) * 0.2;
      if (dot) {
        dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    dot.classList.add("cursor-dot--visible");
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
}
