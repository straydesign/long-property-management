import { cn } from "@/lib/utils";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "primary-on-dark" | "secondary" | "secondary-on-dark";
  size?: "default" | "sm";
}

export function Button({ variant = "primary", size = "default", className, children, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-[family-name:var(--font-body)] font-semibold leading-none no-underline whitespace-nowrap transition-all duration-150 ease-out cursor-pointer",
        size === "default" && "min-h-12 px-6 py-3.5 text-base",
        size === "sm" && "min-h-10 px-[18px] py-2.5 text-sm",
        variant === "primary" && "bg-[--color-black] text-white hover:-translate-y-px hover:shadow-lg",
        variant === "primary-on-dark" && "bg-white text-[--color-black] hover:-translate-y-px hover:shadow-lg",
        variant === "secondary" && "border-[1.5px] border-[--color-black] bg-transparent text-[--color-black] hover:bg-[--color-black]/5",
        variant === "secondary-on-dark" && "border-[1.5px] border-white bg-transparent text-white hover:bg-white/8",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
