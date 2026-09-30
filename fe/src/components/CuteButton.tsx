import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type CuteButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "disabled"
> & {
  className?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
};

export function CuteButton({
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}: CuteButtonProps) {
  const style =
    variant === "primary"
      ? "bg-pink text-white shadow-[0_9px_22px_rgba(233,106,139,.24)] hover:bg-deep-pink"
      : "border border-[#f1dfe2] bg-white text-ink hover:border-pink hover:bg-blush";

  return (
    <motion.button
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3 font-bold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink/30 disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:scale-100 ${style} ${className}`}
      {...props}
    >
      {children}
      {icon}
    </motion.button>
  );
}
