import React from "react";
import { LayoutDashboard, ListTodo, FilePlus } from "lucide-react";
import { cn } from "../../lib/utils";

const Sidebar = ({ activePage, onPageChange }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "all-tickets", label: "All Tickets", icon: ListTodo },
    { id: "create-ticket", label: "Create Ticket", icon: FilePlus },
  ];

  return (
    <div className="w-[240px] bg-primary-default min-h-screen flex flex-col shrink-0">
      <div className="p-10 pb-16">
        <div className="flex items-center gap-2 text-white font-bold text-xl invisible">
          Support System
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={cn(
              "group flex items-center gap-3 px-6 py-3.5 text-white/80 transition-all w-full text-left relative",
              activePage === item.id
                ? "bg-white/20 text-white"
                : "hover:bg-white/10",
            )}
          >
            {activePage === item.id && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white" />
            )}
            <item.icon
              className={cn(
                "w-5 h-5",
                activePage === item.id ? "opacity-100" : "opacity-70",
              )}
            />
            <span
              className={cn(
                "text-[14px]",
                activePage === item.id ? "font-semibold" : "font-medium",
              )}
            >
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      <div className="p-6 pt-10 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-[13px] shrink-0">
            PW
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-white text-[14px] font-semibold truncate">
              Poppy Wright
            </span>
            <span className="text-white/60 text-[12px] truncate">
              poppywright@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
