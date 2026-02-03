import React from "react";
import { cn } from "../../lib/utils";
import { Zap, AlertTriangle, Activity, Minus } from "lucide-react";

const Badge = ({
  className,
  variant = "status",
  status,
  children,
  ...props
}) => {
  // Calming and Full badge styles
  const variants = {
    priority: {
      low: "bg-[#F1F5F9] text-[#64748B] border-[#E2E8F0]",
      medium: "bg-[#E0F2FE] text-[#0369A1] border-[#BAE6FD]",
      high: "bg-[#FFF7ED] text-[#EA580C] border-[#FED7AA]",
      urgent: "bg-[#FEF2F2] text-[#DC2626] border-[#FECACA]",
    },
    status: {
      open: "bg-[#E0F2FE] text-[#0369A1] border-[#BAE6FD]",
      inprogress: "bg-[#FFF7ED] text-[#EA580C] border-[#FED7AA]",
      resolved: "bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]",
      closed: "bg-[#F1F5F9] text-[#64748B] border-[#E2E8F0]",
    },
    category: "bg-[#E0F2FE] text-[#0369A1] border-[#BAE6FD]",
  };

  const getVariantClass = () => {
    const s = status?.toLowerCase().replace(/\s/g, "") || "";
    if (variant === "status") return variants.status[s] || variants.status.open;
    if (variant === "priority")
      return (
        variants.priority[children?.toString().toLowerCase()] ||
        variants.priority.medium
      );
    return variants[variant];
  };

  const getPriorityIcon = () => {
    const p = children?.toString().toLowerCase();
    const iconClass = "w-3.5 h-3.5 mr-1.5";
    if (p === "low") return <Minus className={iconClass} strokeWidth={3} />;
    if (p === "medium")
      return <Activity className={iconClass} strokeWidth={2.5} />;
    if (p === "high")
      return <AlertTriangle className={iconClass} strokeWidth={2.5} />;
    if (p === "urgent")
      return <Zap className={cn(iconClass, "fill-current")} strokeWidth={2} />;
    return null;
  };

  const getDotColor = () => {
    const s = status?.toLowerCase().replace(/\s/g, "") || "";
    if (s === "open") return "bg-[#0EA5E9]";
    if (s === "inprogress") return "bg-[#F97316]";
    if (s === "resolved") return "bg-[#10B981]";
    if (s === "closed") return "bg-[#94A3B8]";
    return "bg-[#0EA5E9]";
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full text-[13px] font-bold tracking-tight border transition-all h-8 px-4",
        getVariantClass(),
        className,
      )}
      {...props}
    >
      {variant === "priority" && getPriorityIcon()}

      <span className="capitalize">{children}</span>

      {variant === "status" && (
        <span className={cn("w-2 h-2 rounded-full ml-2", getDotColor())} />
      )}
    </div>
  );
};

export { Badge };
