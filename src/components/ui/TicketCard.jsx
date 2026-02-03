import React from "react";
import { MessageSquare, Clock } from "lucide-react";
import { Badge } from "./Badge";
import { cn } from "../../lib/utils";

const TicketCard = ({ ticket, onClick }) => {
  return (
    <div
      className="ticket-card cursor-pointer hover:border-primary transition-all active:scale-[0.99]"
      onClick={() => onClick(ticket.id)}
    >
      <div className="flex justify-between items-start mb-3">
        <span className="text-[13px] font-medium text-text-subtitle">
          {ticket.id}
        </span>
        <div className="flex gap-2">
          <Badge variant="priority">{ticket.priority}</Badge>
          <Badge variant="status" status={ticket.status}>
            {ticket.status}
          </Badge>
        </div>
      </div>

      <h3 className="text-h5 font-bold text-text-title mb-2 leading-snug">
        {ticket.title}
      </h3>
      <p className="text-[14px] text-text-body leading-relaxed mb-5 line-clamp-2 font-medium opacity-90">
        {ticket.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-border-default">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-text-subtitle text-[13px] font-medium">
            <MessageSquare className="w-4 h-4" strokeWidth={1.8} />
            <span>{ticket.count || ticket.comments}</span>
          </div>
          <Badge variant="category" className="h-6 text-[12px]">
            {ticket.category}
          </Badge>
        </div>

        <div className="flex items-center gap-1.5 text-text-caption text-[13px] font-medium">
          <Clock className="w-4 h-4" strokeWidth={1.8} />
          <span>{ticket.time}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
