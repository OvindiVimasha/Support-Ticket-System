import React from "react";
import Header from "../components/ui/Header";
import { Input, Textarea, Label } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { SendHorizontal } from "lucide-react";
import { PRIORITY_OPTIONS, CATEGORY_OPTIONS } from "../components/ui/FilterBar";
import { useState } from "react";
import { cn } from "../lib/utils";

const CreateTicket = ({ onCreateTicket, onCancel }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!title.trim()) newErrors.title = "Project title is required";
    if (!priority) newErrors.priority = "Please select a priority";
    if (!category) newErrors.category = "Please select a category";
    if (!description.trim()) newErrors.description = "Description is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newTicket = {
      id: `Tkt -${Math.floor(1000 + Math.random() * 9000)}`,
      title,
      description,
      status: "open",
      priority: priority.toLowerCase(),
      category,
      count: 0,
      time: "Just now",
      comments: [], // Newly created tickets have no existing comments
    };

    onCreateTicket(newTicket);
  };

  const handleFieldChange = (field, value) => {
    if (field === "title") setTitle(value);
    if (field === "priority") setPriority(value);
    if (field === "category") setCategory(value);
    if (field === "description") setDescription(value);

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-surface-subtle h-screen overflow-hidden">
      <Header
        title="Create Ticket"
        subtitle="Create a ticket to report an issue, ask a question, or request assistance."
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

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <Label
                className={cn(
                  "text-[13px] font-semibold transition-colors",
                  errors.title ? "text-red-500" : "text-text-subtitle",
                )}
              >
                Subject
              </Label>
              <Input
                className={cn(
                  "h-12 text-h6 px-4 transition-all",
                  errors.title && "border-red-500 focus:ring-red-500/20",
                )}
                placeholder="Brief description of your Issue"
                value={title}
                onChange={(e) => handleFieldChange("title", e.target.value)}
              />
              {errors.title && (
                <p className="text-[12px] text-red-500 font-medium ml-1">
                  {errors.title}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <Label
                  className={cn(
                    "text-[13px] font-semibold transition-colors",
                    errors.priority ? "text-red-500" : "text-text-subtitle",
                  )}
                >
                  Priority
                </Label>
                <div className="relative">
                  <select
                    className={cn(
                      "flex h-12 w-full rounded-lg border px-4 py-2 text-h6 text-text-caption appearance-none focus:outline-none transition-all",
                      errors.priority
                        ? "border-red-500 focus:ring-2 focus:ring-red-500/20 bg-white"
                        : "border-border-default focus:ring-2 focus:ring-primary-default/20 focus:border-primary-default bg-[#F4F6F7]/60",
                    )}
                    value={priority}
                    onChange={(e) =>
                      handleFieldChange("priority", e.target.value)
                    }
                  >
                    <option value="">Priority</option>
                    {PRIORITY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
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
                        className={
                          errors.priority ? "text-red-500" : "text-text-title"
                        }
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {errors.priority && (
                  <p className="text-[12px] text-red-500 font-medium ml-1">
                    {errors.priority}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label
                  className={cn(
                    "text-[13px] font-semibold transition-colors",
                    errors.category ? "text-red-500" : "text-text-subtitle",
                  )}
                >
                  Category
                </Label>
                <div className="relative">
                  <select
                    className={cn(
                      "flex h-12 w-full rounded-lg border px-4 py-2 text-h6 text-text-caption appearance-none focus:outline-none transition-all",
                      errors.category
                        ? "border-red-500 focus:ring-2 focus:ring-red-500/20 bg-white"
                        : "border-border-default focus:ring-2 focus:ring-primary-default/20 focus:border-primary-default bg-[#F4F6F7]/60",
                    )}
                    value={category}
                    onChange={(e) =>
                      handleFieldChange("category", e.target.value)
                    }
                  >
                    <option value="">Category</option>
                    {CATEGORY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
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
                        className={
                          errors.category ? "text-red-500" : "text-text-title"
                        }
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {errors.category && (
                  <p className="text-[12px] text-red-500 font-medium ml-1">
                    {errors.category}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label
                className={cn(
                  "text-[13px] font-semibold transition-colors",
                  errors.description ? "text-red-500" : "text-text-subtitle",
                )}
              >
                Description
              </Label>
              <Textarea
                className={cn(
                  "min-h-[200px] text-h6 py-3 px-4 transition-all",
                  errors.description && "border-red-500 focus:ring-red-500/20",
                )}
                placeholder="Provide detailed information about your issue"
                value={description}
                onChange={(e) =>
                  handleFieldChange("description", e.target.value)
                }
              />
              {errors.description && (
                <p className="text-[12px] text-red-500 font-medium ml-1">
                  {errors.description}
                </p>
              )}
            </div>

            <div className="flex items-center justify-center gap-4 pt-2">
              <Button
                type="button"
                variant="secondary"
                className="w-44 h-12 text-h6 font-semibold border-primary-default text-primary-default bg-white hover:bg-primary-surface-subtle whitespace-nowrap"
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="w-44 h-12 text-h6 font-semibold bg-primary-default text-white flex items-center justify-center gap-2.5 whitespace-nowrap shadow-lg shadow-primary-default/20 transition-all active:scale-[0.98]"
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
