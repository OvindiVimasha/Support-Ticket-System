import React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-lg border border-[#E0E0E0] px-4 py-2 text-sm placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#0090D4]/20 focus:border-[#0090D4] disabled:cursor-not-allowed disabled:opacity-50 transition-all",
        className,
      )}
      style={{ backgroundColor: "rgba(244, 246, 247, 0.6)" }}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[160px] w-full rounded-lg border border-[#E0E0E0] px-4 py-3 text-sm placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#0090D4]/20 focus:border-[#0090D4] disabled:cursor-not-allowed disabled:opacity-50 transition-all resize-none",
        className,
      )}
      style={{ backgroundColor: "rgba(244, 246, 247, 0.6)" }}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

const Label = ({ children, className }) => (
  <label
    className={cn(
      "block text-[15px] font-medium text-[#333333] mb-2.5",
      className,
    )}
  >
    {children}
  </label>
);

export { Input, Textarea, Label };
