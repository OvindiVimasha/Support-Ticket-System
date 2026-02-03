import React from "react";
import Header from "../components/ui/Header";
import FilterBar from "../components/ui/FilterBar";
import Pagination from "../components/ui/Pagination";
import TicketCard from "../components/ui/TicketCard";
import { MOCK_TICKETS } from "../data/mockData";

const AllTickets = ({ onSelectTicket }) => {
  return (
    <div className="flex-1 flex flex-col bg-[#F9FBFC] h-screen overflow-hidden">
      <Header
        title="All Tickets"
        subtitle="Welcome back! Here's an overview of your support tickets."
      />

      <div className="flex-1 px-12 overflow-y-auto pt-2">
        <FilterBar />

        <div className="grid grid-cols-1 gap-3">
          {MOCK_TICKETS.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onClick={onSelectTicket}
            />
          ))}
        </div>

        <div className="mt-10">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default AllTickets;
