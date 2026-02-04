import React from "react";
import Header from "../components/ui/Header";
import FilterBar from "../components/ui/FilterBar";
import Pagination from "../components/ui/Pagination";
import TicketCard from "../components/ui/TicketCard";
import { MOCK_TICKETS } from "../data/mockData";
import EmptyState from "../components/ui/EmptyState";

const AllTickets = ({
  tickets = [],
  onSelectTicket,
  filters,
  onFilterChange,
  onClearFilters,
}) => {
  return (
    <div className="flex-1 flex flex-col bg-[#F9FBFC] h-screen overflow-hidden">
      <Header
        title="All Tickets"
        subtitle="Monitor tickets, prioritize what matters, and keep your support workflow moving."
        searchValue={filters.search}
        onSearchChange={(value) => onFilterChange("search", value)}
      />

      <div className="flex-1 px-12 overflow-y-auto pt-2 pb-10">
        <FilterBar
          filters={filters}
          onFilterChange={onFilterChange}
          onClearFilters={onClearFilters}
        />

        <div className="grid grid-cols-1 gap-3">
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onClick={onSelectTicket}
            />
          ))}
          {tickets.length === 0 && (
            <EmptyState />
          )}
        </div>

        <div className="mt-10">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default AllTickets;
