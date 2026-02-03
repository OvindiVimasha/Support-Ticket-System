import React from "react";
import Header from "../components/ui/Header";
import FilterBar from "../components/ui/FilterBar";
import Pagination from "../components/ui/Pagination";
import TicketCard from "../components/ui/TicketCard";

const AllTickets = () => {
  const tickets = [
    {
      id: "Tkt - 0010",
      priority: "High",
      status: "open",
      title: "Unable to access dashboard after login",
      description:
        "I am experiencing issues accessing the main dashboard after successfully logging in.",
      comments: 2,
      category: "Technical",
      time: "2 hours ago",
    },
    {
      id: "Tkt - 0011",
      priority: "Medium",
      status: "resolved",
      title: "Payment gateway integration error",
      description:
        "The payment gateway fails to redirect back to the app after successful payment.",
      comments: 5,
      category: "Account & Access",
      time: "4 hours ago",
    },
    {
      id: "Tkt - 0012",
      priority: "Low",
      status: "closed",
      title: "Typo on landing page header",
      description:
        "There is a small typo in the hero section subtitle on the landing page.",
      comments: 0,
      category: "Billing & Payments",
      time: "1 day ago",
    },
    {
      id: "Tkt - 0013",
      priority: "Urgent",
      status: "In Progress",
      title: "Database connection timeout",
      description:
        "Severe latency observed on all database queries in the production environment.",
      comments: 12,
      category: "General Inquiry",
      time: "15 mins ago",
    },
    {
      id: "Tkt - 0014",
      priority: "High",
      status: "open",
      title: "Broken CSS on mobile View",
      description:
        "The grid layout breaks on devices with screen width less than 375px.",
      comments: 3,
      category: "Technical",
      time: "3 hours ago",
    },
    {
      id: "Tkt - 0015",
      priority: "Medium",
      status: "open",
      title: "Feature request: Export to PDF",
      description:
        "Users are asking for a way to export ticket summaries as PDF documents.",
      comments: 1,
      category: "Account & Access",
      time: "5 hours ago",
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-surface-subtle h-screen overflow-hidden">
      <Header
        title="All Tickets"
        subtitle="Welcome back! Here's an overview of your support tickets."
      />

      <div className="flex-1 px-12 overflow-y-auto pt-2">
        <FilterBar />

        <div className="grid grid-cols-1 gap-3">
          {tickets.map((ticket, index) => (
            <TicketCard key={index} ticket={ticket} />
          ))}
        </div>

        <Pagination />
      </div>
    </div>
  );
};

export default AllTickets;
