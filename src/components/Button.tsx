import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "whileHover" | "whileTap"> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  fullWidth = false,
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "rounded-lg font-medium transition-colors";

  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700",
    secondary: "bg-secondary-50 text-primary-600 hover:bg-secondary-100",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
  };

  const sizes = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6",
    lg: "py-4 px-8 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}
