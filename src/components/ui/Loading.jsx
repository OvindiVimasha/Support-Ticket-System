import React from "react";

const Loading = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: 32,
    md: 64,
    lg: 96,
  };

  const pixelSize = sizes[size] || sizes.md;
  const strokeWidth = pixelSize * 0.12; // Matching the thickness in the image
  const center = pixelSize / 2;
  const radius = (pixelSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      <svg
        width={pixelSize}
        height={pixelSize}
        viewBox={`0 0 ${pixelSize} ${pixelSize}`}
        className="animate-spin"
      >
        <defs>
          <linearGradient id="loading-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#15709B" />
            <stop offset="100%" stopColor="#B2DFF1" />
          </linearGradient>
        </defs>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="url(#loading-gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>
    </div>
  );
};

export default Loading;
