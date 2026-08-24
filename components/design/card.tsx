"use client";

import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/utils/cn";

export function Card({
  children,
  className,
  style
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    node.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={style}
      className={cn(
        "card-spotlight relative overflow-hidden rounded-md border border-[var(--line)] bg-[var(--panel)] p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[var(--brand)]/40 hover:shadow-md",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
