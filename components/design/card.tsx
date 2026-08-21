import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-md border border-[var(--line)] bg-[var(--panel)] p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[var(--brand)]/40 hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
