import React from "react";
import { X } from "lucide-react";
import { Button } from "./Button";

// Dropdown Options from Semantic Variables
export const STATUS_OPTIONS = [
  { label: "Open", value: "open" },
  { label: "In Progress", value: "inprogress" },
  { label: "Resolved", value: "resolved" },
  { label: "Closed", value: "closed" },
];
export const PRIORITY_OPTIONS = [
  { label: "Urgent", value: "urgent" },
  { label: "High", value: "high" },
  { label: "Medium", value: "medium" },
  { label: "Low", value: "low" },
];
export const CATEGORY_OPTIONS = [
  { label: "Technical", value: "Technical" },
  { label: "Account & Access", value: "Account" },
  { label: "Billing & Payments", value: "Billing" },
  { label: "General Inquiry", value: "General" },
];

const FilterBar = ({ filters = {}, onFilterChange, onClearFilters }) => {
  const filterConfigs = [
    { id: "priority", label: "Priority", options: PRIORITY_OPTIONS },
    { id: "status", label: "Status", options: STATUS_OPTIONS },
    { id: "category", label: "Category", options: CATEGORY_OPTIONS },
  ];

  return (
    <div className="flex items-center justify-between w-full mb-6 gap-6">
      <div className="flex flex-1 gap-4">
        {filterConfigs.map((config) => (
          <div key={config.id} className="relative flex-1">
            <select
              className="input-field appearance-none pr-10 h-10 font-medium w-full border-border-default"
              value={filters[config.id] || ""}
              onChange={(e) => onFilterChange(config.id, e.target.value)}
            >
              <option value="">Select {config.label}</option>
              {config.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  className="text-text-subtitle"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="primary"
        onClick={onClearFilters}
        className="h-10 px-6 flex items-center gap-2 text-h6 font-semibold bg-primary-default text-white rounded-lg shrink-0 hover:bg-[#0072BB] transition-all"
      >
        Clear filters
        <div className="flex items-center justify-center border border-white/50 rounded-[3px] w-4 h-4 p-0.5">
          <X className="w-3.5 h-3.5" strokeWidth={3.5} />
        </div>
      </Button>
    </div>
  );
};

export default FilterBar;
