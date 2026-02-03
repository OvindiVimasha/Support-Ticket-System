import React from "react";
import { cn } from "../../lib/utils";

const Button = React.forwardRef(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const variants = {
      primary: "bg-[#0090D4] text-white hover:bg-[#007BB5]",
      secondary:
        "bg-white border border-[#0090D4] text-[#0090D4] hover:bg-[#F0F9FF]",
      ghost: "bg-transparent text-[#666666] hover:bg-slate-100",
      danger: "bg-red-500 text-white hover:bg-red-600",
    };

    const sizes = {
      default: "px-6 py-2.5 rounded-lg text-sm font-medium",
      sm: "px-4 py-2 rounded-md text-xs font-medium",
      lg: "px-8 py-3 rounded-xl text-base font-semibold",
      icon: "p-2 rounded-full",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
