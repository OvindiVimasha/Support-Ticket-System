import React from "react";
import Header from "../components/ui/Header";
import FilterBar from "../components/ui/FilterBar";
import Pagination from "../components/ui/Pagination";
import TicketCard from "../components/ui/TicketCard";
import { Ticket, AlertCircle, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "../lib/utils";

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

const Dashboard = () => {
  const stats = [
    {
      title: "Total Tickets",
      value: "06",
      icon: Ticket,
      colorClass: "bg-white border-border-default",
      iconColor: "text-text-title",
    },
    {
      title: "Open Tickets",
      value: "03",
      icon: AlertCircle,
      colorClass: "bg-blue-soft border-blue-main/20",
      iconColor: "text-blue-main",
    },
    {
      title: "In Progress",
      value: "06",
      icon: Clock,
      colorClass: "bg-orange-soft border-orange-main/20",
      iconColor: "text-orange-main",
    },
    {
      title: "Resolved",
      value: "06",
      icon: CheckCircle2,
      colorClass: "bg-green-soft border-green-main/20",
      iconColor: "text-green-main",
    },
  ];

  const tickets = [
    {
      id: "Tkt - 0010",
      priority: "Urgent",
      status: "open",
      title: "Database connection timeout",
      description:
        "Severe latency observed on all database queries in the production environment.",
      comments: 12,
      category: "Technical",
      time: "15 mins ago",
    },
    {
      id: "Tkt - 0011",
      priority: "High",
      status: "In Progress",
      title: "Unable to access dashboard after login",
      description:
        "I am experiencing issues accessing the main dashboard after successfully logging in.",
      comments: 2,
      category: "Account & Access",
      time: "2 hours ago",
    },
    {
      id: "Tkt - 0012",
      priority: "Medium",
      status: "resolved",
      title: "Payment gateway integration error",
      description:
        "The payment gateway fails to redirect back to the app after successful payment.",
      comments: 5,
      category: "Billing & Payments",
      time: "4 hours ago",
    },
    {
      id: "Tkt - 0013",
      priority: "Low",
      status: "closed",
      title: "Typo on landing page header",
      description:
        "There is a small typo in the hero section subtitle on the landing page.",
      comments: 0,
      category: "General Inquiry",
      time: "1 day ago",
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#F9FBFC] h-screen overflow-hidden">
      <Header
        title="Dashboard"
        subtitle="Welcome back! Here's an overview of your support tickets."
      />

      <div className="flex-1 px-12 overflow-y-auto pt-2 pb-10">
        <div className="grid grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <FilterBar />

        <h2 className="text-h5 font-bold text-text-title mb-6">
          Recent Tickets
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {tickets.map((ticket, index) => (
            <TicketCard key={index} ticket={ticket} />
          ))}
        </div>

        <div className="mt-10">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
