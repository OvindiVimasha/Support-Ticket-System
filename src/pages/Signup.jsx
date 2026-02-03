import React from "react";
import { useState } from "react";
import AuthLayout from "../components/ui/AuthLayout";
import { Input, Label } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { ArrowRight, Eye } from "lucide-react";
import SignupIllustration from "../assets/Signup.png";

const Signup = ({ onNavigateToLogin, onSignup, showToast }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSignup = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!fullName) {
      newErrors.fullName = "Full name is required";
    }

    if (!email) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (
      !/(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;<>,.?/~`-])/.test(
        password,
      )
    ) {
      newErrors.password = "Include letters, numbers and special characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showToast("Please fix the errors in the form", "error");
      return;
    }

    onSignup({ fullName, email });
  };

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

      <form className="space-y-2.5 lg:space-y-3" onSubmit={handleSignup}>
        <div className="space-y-1">
          <Label className="text-[13px] lg:text-[14px] font-medium text-[#333333] ml-1">
            Full Name
          </Label>
          <Input
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (errors.fullName)
                setErrors((prev) => ({ ...prev, fullName: null }));
            }}
            placeholder="Enter your full name..."
            error={!!errors.fullName}
            className="h-10 lg:h-[46px] bg-[#F8FAFC] rounded-xl text-[14px] px-5 placeholder:text-[#999999]/70"
          />
          {errors.fullName && (
            <p className="text-[11px] text-[#F44336] ml-1 mt-0.5 font-medium">
              {errors.fullName}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label className="text-[13px] lg:text-[14px] font-medium text-[#333333] ml-1">
            Email Address
          </Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: null }));
            }}
            placeholder="Enter your email..."
            error={!!errors.email}
            className="h-10 lg:h-[46px] bg-[#F8FAFC] rounded-xl text-[14px] px-5 placeholder:text-[#999999]/70"
          />
          {errors.email && (
            <p className="text-[11px] text-[#F44336] ml-1 mt-0.5 font-medium">
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label className="text-[13px] lg:text-[14px] font-medium text-[#333333] ml-1">
            Password
          </Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password)
                  setErrors((prev) => ({ ...prev, password: null }));
              }}
              placeholder="********"
              error={!!errors.password}
              className="h-10 lg:h-[46px] bg-[#F8FAFC] rounded-xl text-[14px] px-5 pr-14 placeholder:text-[#999999]/70"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#333333] hover:text-[#000000] opacity-80"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-[11px] text-[#F44336] ml-1 mt-0.5 font-medium">
              {errors.password}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label className="text-[13px] lg:text-[14px] font-medium text-[#333333] ml-1">
            Confirm Password
          </Label>
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (errors.confirmPassword)
                  setErrors((prev) => ({ ...prev, confirmPassword: null }));
              }}
              placeholder="********"
              error={!!errors.confirmPassword}
              className="h-10 lg:h-[46px] bg-[#F8FAFC] rounded-xl text-[14px] px-5 pr-14 placeholder:text-[#999999]/70"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#333333] hover:text-[#000000] opacity-80"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-[11px] text-[#F44336] ml-1 mt-0.5 font-medium">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <div className="pt-1 lg:pt-1.5 flex justify-center">
          <Button
            type="submit"
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
              type="button"
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
