import React from "react";
import { LayoutDashboard, ListTodo, FilePlus } from "lucide-react";
import { cn } from "../../lib/utils";
import { LogOut } from "lucide-react";
import Logo from "../../assets/Logo.png";

const Sidebar = ({ activePage, onPageChange, user }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "all-tickets", label: "All Tickets", icon: ListTodo },
    { id: "create-ticket", label: "Create Ticket", icon: FilePlus },
  ];

  return (
    <div className="w-[240px] bg-primary-default min-h-screen flex flex-col shrink-0">
      <div className="p-8 pb-12 flex justify-center">
        <img src={Logo} alt="Tickfy Logo" className="h-9 object-contain" />
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={cn(
              "sidebar-item",
              activePage === item.id && "active",
            )}
          >
            <item.icon
              className={cn(
                "w-5 h-5 transition-opacity",
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

      <div className="mt-auto">
        <button
          onClick={() => onPageChange("profile")}
          className={cn(
            "p-6 py-8 border-t border-white/10 text-left transition-all hover:bg-white/5 w-full",
            activePage === "profile" && "bg-white/10",
          )}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-[13px] shrink-0 uppercase">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex flex-col overflow-hidden text-left">
              <span className="text-white text-[14px] font-semibold truncate">
                {user.name}
              </span>
              <span className="text-white/60 text-[12px] truncate">
                {user.email}
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
