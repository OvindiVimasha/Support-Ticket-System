import React, { useEffect, useState } from "react";
import { CheckCircle2, AlertCircle, XCircle, X } from "lucide-react";
import { cn } from "../../lib/utils";

const Toast = ({
  message,
  type = "success",
  isVisible,
  onClose,
  duration = 3000,
}) => {
  const [render, setRender] = useState(isVisible);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setRender(true);
      // Small delay to trigger animation
      const timer = setTimeout(() => setAnimating(true), 10);
      return () => clearTimeout(timer);
    } else {
      setAnimating(false);
      // Delay unmounting to allow exit animation to play
      const timer = setTimeout(() => setRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && duration) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!render) return null;

  const variants = {
    success: {
      bg: "bg-[#E8F5E9]",
      border: "border-[#4CAF50]",
      text: "text-[#4CAF50]",
      icon: CheckCircle2,
    },
    warning: {
      bg: "bg-[#FFF3E0]",
      border: "border-[#FF8A00]",
      text: "text-[#FF8A00]",
      icon: AlertCircle,
    },
    error: {
      bg: "bg-[#FFEBEE]",
      border: "border-[#F44336]",
      text: "text-[#F44336]",
      icon: XCircle,
    },
  };

  const config = variants[type] || variants.success;
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-out",
        animating ? "translate-y-6 opacity-100" : "-translate-y-full opacity-0",
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 px-6 py-2.5 rounded-full border shadow-sm min-w-[320px] justify-between",
          config.bg,
          config.border,
          config.text,
        )}
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 fill-current opacity-80" />
          <span className="text-[14px] font-medium">{message}</span>
        </div>
        <button
          onClick={onClose}
          className="hover:opacity-70 transition-opacity ml-4"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
