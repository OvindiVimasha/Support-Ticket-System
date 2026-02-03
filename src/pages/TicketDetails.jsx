import React from "react";
import Header from "../components/ui/Header";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { MessageSquare, Heart, Clock, Send } from "lucide-react";
import { Textarea } from "../components/ui/Input";
import { MOCK_TICKETS, MOCK_USER } from "../data/mockData";
import { cn } from "../lib/utils";

const TicketDetails = ({ ticketId }) => {
  // Find the ticket by ID, default to the first one if not found
  const initialTicket =
    MOCK_TICKETS.find((t) => t.id === ticketId) || MOCK_TICKETS[0];

  const [comments, setComments] = React.useState(initialTicket.comments);
  const [newComment, setNewComment] = React.useState("");

  // Reset comments when ticketId changes
  React.useEffect(() => {
    const ticket =
      MOCK_TICKETS.find((t) => t.id === ticketId) || MOCK_TICKETS[0];
    setComments(ticket.comments);
  }, [ticketId]);

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment = {
      id: `c${Date.now()}`,
      author: MOCK_USER.name,
      content: newComment,
      time: "Just now",
      avatar: MOCK_USER.avatar,
      isAgent: false,
    };

    setComments([...comments, comment]);
    setNewComment("");
  };

  const ticket = initialTicket;

  return (
    <div className="flex-1 flex flex-col bg-[#F9FBFC] h-screen overflow-hidden">
      <Header
        title="Ticket Details"
        subtitle="Welcome back! Here's an overview of your support tickets."
        showSearch={false}
      />

      <div className="flex-1 overflow-y-auto p-8 pt-6 px-12 space-y-4 pb-20">
        {/* Information Card */}
        <div className="bg-[#f2faff]/30 rounded-[20px] border border-[#E0E0E0]/50 shadow-sm p-6 py-5">
          <div className="flex justify-between items-start mb-4">
            <div className="text-[#666666] text-sm mb-2">Tkt {ticket.id}</div>
            <div className="flex gap-3">
              <Badge variant="priority">{ticket.priority}</Badge>
              <Badge variant="status" status={ticket.status}>
                {ticket.status}
              </Badge>
            </div>
          </div>

          <h2 className="text-lg font-bold text-[#333333] mb-2">
            {ticket.title}
          </h2>
          <p className="text-[#666666] text-[14px] leading-relaxed mb-6">
            {ticket.description}
          </p>

          <div className="border-t border-[#E0E0E0]/60 pt-4 flex justify-between items-center text-[#999999]">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-[13px]">
                <MessageSquare className="w-4 h-4 opacity-70" />
                {comments.length}
              </div>
              <Badge variant="category">{ticket.category}</Badge>
            </div>
            <div className="flex items-center gap-2 text-[13px]">
              <Clock className="w-4 h-4 opacity-70" />
              {ticket.time}
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-[24px] border border-[#E0E0E0]/60 shadow-sm p-8 flex flex-col min-h-0 flex-1">
          <div className="flex items-center gap-3 text-lg font-bold text-[#333333] mb-6">
            <MessageSquare className="w-5 h-5 opacity-70" />
            Comments ({comments.length})
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 mb-6 pr-2">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div
                  key={comment.id}
                  className={cn(
                    "rounded-2xl p-4 flex items-start gap-4",
                    comment.isAgent
                      ? "bg-[#E6F4FB]/80 border border-[#B6E0F5]/50"
                      : "bg-[#F4F6F7]/80 border border-[#E0E0E0]/50",
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0",
                      comment.isAgent ? "bg-[#0090D4]" : "bg-[#718096]",
                    )}
                  >
                    {comment.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="font-medium text-[#999999] text-[13px]">
                        {comment.author}
                      </span>
                      <span className="text-[#999999] text-[13px]">
                        {comment.time}
                      </span>
                    </div>
                    <p className="text-[#333333] text-[14px] leading-relaxed font-normal">
                      {comment.content}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-[#999999] text-center font-medium py-6 italic">
                No comments yet.
              </p>
            )}
          </div>

          {/* Add Comment Input */}
          <div className="relative mt-auto">
            <div className="bg-[#F8FAFB] rounded-2xl p-6 min-h-[120px] mb-4">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment"
                className="w-full bg-transparent border-none focus:outline-none text-[14px] text-[#333333] placeholder:text-[#999999] resize-none h-full"
              />
            </div>
            <div className="flex justify-end">
              <Button
                onClick={handleAddComment}
                className="bg-[#0090D4] hover:bg-[#0081C0] text-white px-8 h-12 rounded-lg flex items-center gap-3 font-bold text-sm shadow-lg shadow-[#0090D4]/20 transition-all active:scale-[0.98]"
              >
                Add Comment
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
