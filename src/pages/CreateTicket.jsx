import React from "react";
import Header from "../components/ui/Header";
import { Input, Textarea, Label } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { SendHorizontal } from "lucide-react";
import { PRIORITY_OPTIONS, CATEGORY_OPTIONS } from "../components/ui/FilterBar";

const CreateTicket = () => {
  return (
    <div className="flex-1 flex flex-col bg-surface-subtle h-screen overflow-hidden">
      <Header
        title="Create Ticket"
        subtitle="Welcome back! Here's an overview of your support tickets."
        showSearch={false}
      />

      <div className="flex-1 px-12 overflow-y-auto pt-4 pb-8">
        <div className="max-w-[900px] mx-auto bg-white p-12 rounded-[24px] border border-surface-default shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
          <div className="mb-6">
            <h2 className="text-h2 font-semibold text-text-title mb-1">
              Create New Ticket
            </h2>
            <p className="text-h6 text-text-subtitle">
              Fill out the form below to submit a new support ticket
            </p>
          </div>

          <form className="space-y-10">
            <div>
              <Label className="text-[13px] mb-2.5 font-semibold text-text-subtitle">
                Subject
              </Label>
              <Input
                className="h-12 text-h6 border-border-default px-4"
                placeholder="Brief description of your Issue"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label className="text-[13px] mb-2.5 font-semibold text-text-subtitle">
                  Priority
                </Label>
                <div className="relative">
                  <select
                    className="flex h-12 w-full rounded-lg border border-border-default px-4 py-2 text-h6 text-text-caption appearance-none focus:outline-none focus:ring-2 focus:ring-primary-default/20 focus:border-primary-default transition-all"
                    style={{ backgroundColor: "rgba(244, 246, 247, 0.6)" }}
                  >
                    <option value="">Priority</option>
                    {PRIORITY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt.toLowerCase()}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      width="12"
                      height="7"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L13 1"
                        stroke="currentColor"
                        className="text-text-title"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <Label className="text-[13px] mb-2.5 font-semibold text-text-subtitle">
                  Category
                </Label>
                <div className="relative">
                  <select
                    className="flex h-12 w-full rounded-lg border border-border-default px-4 py-2 text-h6 text-text-caption appearance-none focus:outline-none focus:ring-2 focus:ring-primary-default/20 focus:border-primary-default transition-all"
                    style={{ backgroundColor: "rgba(244, 246, 247, 0.6)" }}
                  >
                    <option value="">Category</option>
                    {CATEGORY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt.toLowerCase()}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      width="12"
                      height="7"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L13 1"
                        stroke="currentColor"
                        className="text-text-title"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Label className="text-[13px] mb-2.5 font-semibold text-text-subtitle">
                Description
              </Label>
              <Textarea
                className="min-h-[200px] text-h6 py-3 px-4 border-border-default"
                placeholder="Provide detailed information about your issue"
              />
            </div>

            <div className="flex items-center justify-center gap-4 pt-2">
              <Button
                variant="secondary"
                className="w-44 h-12 text-h6 font-semibold border-primary-default text-primary-default bg-white hover:bg-primary-surface-subtle whitespace-nowrap"
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                className="w-44 h-12 text-h6 font-semibold bg-primary-default text-white flex items-center justify-center gap-2.5 whitespace-nowrap"
              >
                Submit Ticket
                <SendHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
