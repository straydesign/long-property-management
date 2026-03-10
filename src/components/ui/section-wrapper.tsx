import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "dark";
  id?: string;
}

export function SectionWrapper({ children, className, variant = "default", id }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        variant === "muted" && "bg-[--color-surface]",
        variant === "dark" && "bg-[--color-black] text-white",
        className
      )}
    >
      {children}
    </section>
  );
}
