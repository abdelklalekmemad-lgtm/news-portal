import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Tone = "brand" | "neutral" | "dark";

const tones: Record<Tone, string> = {
  brand: "bg-brand-muted text-brand-dark ring-1 ring-brand/15",
  neutral: "bg-slate-100 text-slate-700 ring-1 ring-slate-200",
  dark: "bg-slate-900 text-white",
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

export function Badge({ className, tone = "brand", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
