import React from "react";

const AuthLayout = ({ children, illustration, title, subtitle }) => {
  return (
    <div className="flex h-screen bg-white font-sans overflow-hidden">
      {/* Left Section - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0090D4] flex-col items-center justify-center p-12 text-white relative overflow-hidden">
        {/* Decorative Layer - Double Concentric Circles (Centered) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Outer Light Circle */}
          <div
            className="rounded-full absolute -translate-y-20"
            style={{
              width: "400px",
              height: "400px",
              backgroundColor: "#E6F4FB",
              opacity: "0.20",
            }}
          />
          {/* Inner Circle */}
          <div
            className="rounded-full absolute -translate-y-20"
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "#F2FBFF",
              opacity: "0.30",
            }}
          />
        </div>

        {/* Four Small Floating Circles */}
        <div className="absolute top-[20%] left-[18%] w-8 h-8 bg-[#E6F4FB]/25 rounded-full" />
        <div className="absolute top-[12%] right-[20%] w-12 h-12 bg-[#E6F4FB]/35 rounded-full" />
        <div className="absolute bottom-[40%] left-[10%] w-8 h-8 bg-[#E6F4FB]/25 rounded-full" />
        <div className="absolute bottom-[45%] right-[18%] w-6 h-6 bg-[#E6F4FB]/25 rounded-full" />

        {/* Illustration - Absolutely centered in the circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+100px)] z-20">
          {illustration && (
            <img
              src={illustration}
              alt="Auth Illustration"
              className="w-[680px] h-auto object-contain"
              style={{
                filter: "drop-shadow(0 20px 35px rgba(0,0,0,0.15))",
                width: "680px",
              }}
            />
          )}
        </div>

        {/* Content - Text Below */}
        <div className="relative z-10 w-full max-w-full flex flex-col items-center justify-end h-full pb-8">
          {/* Text positioned below the circles with spacing */}
          <div className="text-center px-0">
            <h1
              className="!text-[36px] !font-extrabold mb-6 tracking-tight leading-[1.1]"
              style={{
                color: "#ffffff",
                fontSize: "36px",
                fontWeight: "800",
              }}
            >
              {title}
            </h1>
            <p
              className="text-[16px] leading-relaxed max-w-[400px] mx-auto font-normal"
              style={{ color: "#ffffff" }}
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Form Area */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 lg:p-10 bg-[#F9FBFC] overflow-y-auto">
        <div className="w-full max-w-[520px] bg-white rounded-[32px] px-10 lg:px-14 py-10 lg:py-12 border-[0.5px] border-[#E6F4FB] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
