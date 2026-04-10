import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  rounded?: "none" | "md" | "lg" | "xl";
};

const roundedMap = {
  none: "",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
};

export function OptimizedImage({
  className,
  rounded = "lg",
  loading = "lazy",
  decoding = "async",
  alt,
  ...props
}: OptimizedImageProps) {
  return (
    <img
      alt={alt ?? ""}
      loading={loading}
      decoding={decoding}
      className={cn("h-full w-full object-cover", roundedMap[rounded], className)}
      {...props}
    />
  );
}
