import React from "react";
import Header from "../components/ui/Header";
import FilterBar from "../components/ui/FilterBar";
import Pagination from "../components/ui/Pagination";
import TicketCard from "../components/ui/TicketCard";
import { Ticket, AlertCircle, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "../lib/utils";
import { MOCK_TICKETS } from "../data/mockData";
import EmptyState from "../components/ui/EmptyState";

const StatCard = ({ title, value, icon: Icon, colorClass, iconColor }) => (
  <div
    className="p-5 rounded-2xl border border-border-default shadow-sm flex items-center justify-between"
    style={{ backgroundColor: "rgba(242, 251, 255, 0.4)" }}
  >
    <div>
      <p className="text-[13px] text-text-subtitle font-bold mb-1 uppercase tracking-wider">
        {title}
      </p>
      <h3 className="text-h1 font-bold text-text-title tracking-tight">
        {value}
      </h3>
    </div>
    <div
      className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center border",
        colorClass,
      )}
    >
      <Icon className={cn("w-6 h-6", iconColor)} strokeWidth={1.5} />
    </div>
  </div>
);

const Dashboard = ({
  tickets = [],
  onSelectTicket,
  filters,
  onFilterChange,
  onClearFilters,
}) => {
  const stats = [
    {
      title: "Total Tickets",
      value: tickets.length.toString().padStart(2, "0"),
      icon: Ticket,
      colorClass: "bg-white border-border-default",
      iconColor: "text-text-title",
    },
    {
      title: "Open Tickets",
      value: tickets
        .filter((t) => t.status === "open")
        .length.toString()
        .padStart(2, "0"),
      icon: AlertCircle,
      colorClass: "bg-blue-soft border-blue-main/20",
      iconColor: "text-blue-main",
    },
    {
      title: "In Progress",
      value: tickets
        .filter((t) => t.status === "inprogress")
        .length.toString()
        .padStart(2, "0"),
      icon: Clock,
      colorClass: "bg-orange-soft border-orange-main/20",
      iconColor: "text-orange-main",
    },
    {
      title: "Resolved",
      value: tickets
        .filter((t) => t.status === "resolved")
        .length.toString()
        .padStart(2, "0"),
      icon: CheckCircle2,
      colorClass: "bg-green-soft border-green-main/20",
      iconColor: "text-green-main",
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#F9FBFC] h-screen overflow-hidden">
      <Header
        title="Dashboard"
        subtitle="Welcome back! Here's an overview of your support tickets."
        searchValue={filters.search}
        onSearchChange={(value) => onFilterChange("search", value)}
      />

      <div className="flex-1 px-12 overflow-y-auto pt-2 pb-10">
        <div className="grid grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <FilterBar
          filters={filters}
          onFilterChange={onFilterChange}
          onClearFilters={onClearFilters}
        />

        <h2 className="text-h5 font-bold text-text-title mb-6">
          Recent Tickets
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {tickets.slice(0, 5).map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onClick={onSelectTicket}
            />
          ))}
          {tickets.length === 0 && (
            <EmptyState
              title="No tickets found"
              message="Create your first ticket to get started!"
            />
          )}
        </div>

        <div className="mt-10">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
