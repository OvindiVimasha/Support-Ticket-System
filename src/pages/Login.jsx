import React from "react";
import AuthLayout from "../components/ui/AuthLayout";
import { Input, Label } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { ArrowRight, Eye } from "lucide-react";
import SigninIllustration from "../assets/Signin.png";

const Login = ({ onNavigateToSignup, onLogin }) => {
  return (
    <AuthLayout
      illustration={SigninIllustration}
      title="Simplify your support workflow"
      subtitle="Manage tickets, collaborate with your team, and deliver faster resolutions — all in one place."
    >
      <div className="mb-6 lg:mb-8">
        <h2 className="text-[28px] lg:text-[32px] font-bold text-[#333333] mb-2 leading-tight">
          Welcome back
        </h2>
        <p className="text-[#999999] text-[13px] font-medium">
          Enter your credentials to access your account
        </p>
      </div>

      <form
        className="space-y-5 lg:space-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="space-y-1.5 lg:space-y-2">
          <Label className="text-[13px] lg:text-[14px] font-medium text-[#333333] ml-1">
            Email Address
          </Label>
          <Input
            placeholder="Enter your email..."
            className="h-11 lg:h-[52px] bg-[#F8FAFC] border-transparent focus:bg-white focus:border-[#0090D4]/20 rounded-xl text-[14px] px-5 placeholder:text-[#999999]/70"
          />
        </div>

        <div className="space-y-1.5 lg:space-y-2">
          <Label className="text-[13px] lg:text-[14px] font-medium text-[#333333] ml-1">
            Password
          </Label>
          <div className="relative">
            <Input
              type="password"
              placeholder="********"
              className="h-11 lg:h-[52px] bg-[#F8FAFC] border-transparent focus:bg-white focus:border-[#0090D4]/20 rounded-xl text-[14px] px-5 pr-14 placeholder:text-[#999999]/70"
            />
            <button
              type="button"
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#333333] hover:text-[#000000] opacity-80"
            >
              <Eye className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-2 lg:mt-3 flex justify-end">
            <button
              type="button"
              className="text-[12px] lg:text-[13px] font-medium text-[#0090D4] hover:underline"
            >
              Forgot Password ?
            </button>
          </div>
        </div>

        <div className="pt-2 lg:pt-4 flex justify-center">
          <Button
            onClick={onLogin}
            className="w-full max-w-[300px] h-10 lg:h-[48px] bg-[#0090D4] hover:bg-[#0072A8] text-white rounded-xl text-[15px] lg:text-[16px] font-medium flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#0090D4]/20"
          >
            Sign in
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="text-center pt-4 lg:pt-6">
          <p className="text-[13px] lg:text-[14px] text-[#333333] font-medium opacity-80">
            Don't have an account ?{" "}
            <button
              onClick={onNavigateToSignup}
              className="font-medium text-[#0090D4] hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
