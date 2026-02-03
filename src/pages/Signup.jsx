import React from "react";
import AuthLayout from "../components/ui/AuthLayout";
import { Input, Label } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { ArrowRight, Eye } from "lucide-react";
import SignupIllustration from "../assets/Signup.png";

const Signup = ({ onNavigateToLogin, onSignup }) => {
  return (
    <AuthLayout
      illustration={SignupIllustration}
      title="Join thousands of support teams"
      subtitle="Create your account and start managing customer support tickets in minutes."
    >
      <div className="mb-4 lg:mb-5">
        <h2 className="text-[26px] lg:text-[30px] font-bold text-[#333333] mb-1.5 leading-tight">
          Create an account
        </h2>
        <p className="text-[#999999] text-[12px] font-medium">
          Enter your details to get started
        </p>
      </div>

      <form
        className="space-y-2.5 lg:space-y-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="space-y-1">
          <Label className="text-[13px] lg:text-[14px] font-medium text-[#333333] ml-1">
            Full Name
          </Label>
          <Input
            placeholder="Enter your full name..."
            className="h-10 lg:h-[46px] bg-[#F8FAFC] border-transparent focus:bg-white focus:border-[#0090D4]/20 rounded-xl text-[14px] px-5 placeholder:text-[#999999]/70"
          />
        </div>

        <div className="space-y-1">
          <Label className="text-[13px] lg:text-[14px] font-medium text-[#333333] ml-1">
            Email Address
          </Label>
          <Input
            placeholder="Enter your email..."
            className="h-10 lg:h-[46px] bg-[#F8FAFC] border-transparent focus:bg-white focus:border-[#0090D4]/20 rounded-xl text-[14px] px-5 placeholder:text-[#999999]/70"
          />
        </div>

        <div className="space-y-1">
          <Label className="text-[13px] lg:text-[14px] font-medium text-[#333333] ml-1">
            Password
          </Label>
          <div className="relative">
            <Input
              type="password"
              placeholder="********"
              className="h-10 lg:h-[46px] bg-[#F8FAFC] border-transparent focus:bg-white focus:border-[#0090D4]/20 rounded-xl text-[14px] px-5 pr-14 placeholder:text-[#999999]/70"
            />
            <button
              type="button"
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#333333] hover:text-[#000000] opacity-80"
            >
              <Eye className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-[13px] lg:text-[14px] font-medium text-[#333333] ml-1">
            Confirm Password
          </Label>
          <div className="relative">
            <Input
              type="password"
              placeholder="********"
              className="h-10 lg:h-[46px] bg-[#F8FAFC] border-transparent focus:bg-white focus:border-[#0090D4]/20 rounded-xl text-[14px] px-5 pr-14 placeholder:text-[#999999]/70"
            />
            <button
              type="button"
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#333333] hover:text-[#000000] opacity-80"
            >
              <Eye className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="pt-1 lg:pt-1.5 flex justify-center">
          <Button
            onClick={onSignup}
            className="w-full max-w-[300px] h-9 lg:h-[44px] bg-[#0090D4] hover:bg-[#0072A8] text-white rounded-xl text-[15px] lg:text-[16px] font-medium flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#0090D4]/20"
          >
            Sign Up
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="text-center pt-2 lg:pt-3">
          <p className="text-[13px] lg:text-[14px] text-[#333333] font-medium opacity-80">
            Already have an account ?{" "}
            <button
              onClick={onNavigateToLogin}
              className="font-medium text-[#0090D4] hover:underline"
            >
              Sign In
            </button>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Signup;
