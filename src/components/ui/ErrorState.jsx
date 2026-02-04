import React from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "./Button";

const ErrorState = ({
    title = "Something went wrong",
    message = "We encountered an error while trying to load the data. Please try again.",
    onRetry,
    className = "",
}) => {
    return (
        <div
            className={`flex flex-col items-center justify-center p-12 py-20 bg-white rounded-[32px] border-2 border-dashed border-[#F44336]/30 ${className}`}
        >
            <div className="w-20 h-20 rounded-full bg-[#FEF2F2] flex items-center justify-center mb-6">
                <AlertCircle className="w-10 h-10 text-[#F44336]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[20px] font-bold text-[#333333] mb-2">{title}</h3>
            <p className="text-[#999999] text-[14px] max-w-[320px] text-center font-medium leading-relaxed mb-8">
                {message}
            </p>
            {onRetry && (
                <Button
                    onClick={onRetry}
                    className="flex items-center gap-2 bg-[#F44336] hover:bg-[#D32F2F] text-white px-6 h-11 rounded-xl"
                >
                    <RefreshCw className="w-4 h-4" />
                    Try Again
                </Button>
            )}
        </div>
    );
};

export default ErrorState;
