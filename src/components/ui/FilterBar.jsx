import React from "react";
import { X } from "lucide-react";
import { Button } from "../ui/Button";

// Dropdown Options from Semantic Variables
export const STATUS_OPTIONS = ["Open", "In Progress", "Resolved", "Closed"];
export const PRIORITY_OPTIONS = ["Urgent", "High", "Medium", "Low"];
export const CATEGORY_OPTIONS = [
  "Technical",
  "Account & Access",
  "Billing & Payments",
  "General Inquiry",
];

const FilterBar = () => {
  const filterConfigs = [
    { label: "Priority", options: PRIORITY_OPTIONS },
    { label: "Status", options: STATUS_OPTIONS },
    { label: "Category", options: CATEGORY_OPTIONS },
  ];

  return (
    <div className="flex items-center justify-between w-full mb-6 gap-6">
      <div className="flex flex-1 gap-4">
        {filterConfigs.map((config) => (
          <div key={config.label} className="relative flex-1">
            <select className="input-field appearance-none pr-10 h-10 font-medium w-full border-border-default">
              <option value="">Select {config.label}</option>
              {config.options.map((opt) => (
                <option key={opt} value={opt.toLowerCase()}>
                  {opt}
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
