import React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef(
  ({ className, type, icon: Icon, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999999]">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-lg border py-2 text-sm placeholder:text-[#999999]/50 focus:outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-[#F44336] focus:ring-2 focus:ring-[#F44336]/10"
              : "border-[#E0E0E0] focus:ring-2 focus:ring-[#0090D4]/10 focus:border-[#0090D4]",
            Icon ? "pl-12 pr-4" : "px-5",
            className,
          )}
          style={{ backgroundColor: "rgba(244, 246, 247, 0.6)" }}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
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
