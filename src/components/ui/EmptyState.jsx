import React from "react";
import { FolderOpen } from "lucide-react";

const EmptyState = ({
    title = "No results found",
    message = "Try adjusting your search or filter to find what you're looking for.",
    icon: Icon = FolderOpen,
    className = "",
}) => {
    return (
        <div
            className={`flex flex-col items-center justify-center p-12 py-20 bg-white rounded-[32px] border-2 border-dashed border-[#0090D4]/30 ${className}`}
        >
            <div className="w-20 h-20 rounded-full bg-[#E6F4FB] flex items-center justify-center mb-6">
                <Icon className="w-10 h-10 text-[#0090D4]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[20px] font-bold text-[#333333] mb-2">{title}</h3>
            <p className="text-[#999999] text-[14px] max-w-[320px] text-center font-medium leading-relaxed">
                {message}
            </p>
        </div>
    );
};

export default EmptyState;
