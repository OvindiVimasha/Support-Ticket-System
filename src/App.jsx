import React from "react";
import { useState } from "react";
import Sidebar from "./components/ui/SideBar";
import Dashboard from "./pages/Dashboard";
import CreateTicket from "./pages/CreateTicket";
import AllTickets from "./pages/AllTickets";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Toast from "./components/ui/Toast";
import TicketDetails from "./pages/TicketDetails";
import Profile from "./pages/Profile";
import Loading from "./components/ui/Loading";
import ErrorState from "./components/ui/ErrorState";
import EmptyState from "./components/ui/EmptyState";

import { MOCK_TICKETS, MOCK_USER } from "./data/mockData";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("isAuthenticated") === "true",
  );
  const [activePage, setActivePage] = useState(() => {
    const saved = localStorage.getItem("activePage");
    if (isAuthenticated && (!saved || saved === "login" || saved === "signup")) {
      return "dashboard";
    }
    return saved || "dashboard";
  });
  const [selectedTicketId, setSelectedTicketId] = useState(
    () => localStorage.getItem("selectedTicketId") || null,
  );
  const [tickets, setTickets] = useState(() => {
    const saved = localStorage.getItem("tickets");
    return saved ? JSON.parse(saved) : MOCK_TICKETS;
  });
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : MOCK_USER;
  });
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "success",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    priority: "",
    category: "",
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      search: "",
      status: "",
      priority: "",
      category: "",
    });
  };

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      ticket.id.toLowerCase().includes(filters.search.toLowerCase());
    const matchesStatus = filters.status ? ticket.status === filters.status : true;
    const matchesPriority = filters.priority
      ? ticket.priority === filters.priority
      : true;
    const matchesCategory = filters.category
      ? ticket.category.toLowerCase() === filters.category.toLowerCase()
      : true;

    return matchesSearch && matchesStatus && matchesPriority && matchesCategory;
  });

  // Initial loading simulation
  React.useEffect(() => {
    if (isAuthenticated && !isLoading && !error) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated]);

  // Persistence Logic
  React.useEffect(() => {
    localStorage.setItem("activePage", activePage);
    localStorage.setItem("isAuthenticated", isAuthenticated);
    localStorage.setItem("selectedTicketId", selectedTicketId || "");
    localStorage.setItem("tickets", JSON.stringify(tickets));
    localStorage.setItem("user", JSON.stringify(user));
  }, [activePage, isAuthenticated, selectedTicketId, tickets, user]);

  const showToast = (message, type = "success") => {
    setToast({ isVisible: true, message, type });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  const handleTicketSelect = (id) => {
    setSelectedTicketId(id);
    setActivePage("ticket-details");
  };

  const handleCreateTicket = (newTicket) => {
    setTickets([newTicket, ...tickets]);
    setActivePage("dashboard");
    showToast("Ticket created successfully!", "success");
  };

  const handleUpdateUser = (updatedUser) => {
    setUser(updatedUser);
    showToast("Profile updated successfully!", "success");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActivePage("login");
    // Reset tickets and user on logout
    setTickets(MOCK_TICKETS);
    setUser(MOCK_USER);
    localStorage.clear();
    showToast("Logged out successfully", "success");
  };

  const handleLogin = (loginUser) => {
    setIsAuthenticated(true);
    // Create user object from login data (only email is available from login form usually)
    // We'll keep the existing name or use a default if it's a new login
    setUser((prev) => ({
      ...prev,
      ...loginUser,
      // If loginUser only has email, we keep current name or use default
      name: loginUser.fullName || prev.name || "User",
    }));
    setActivePage("dashboard");
    showToast("Welcome back!", "success");
  };

  const handleSignup = (signupUser) => {
    // We don't authenticate yet, just save user data and redirect to login
    setUser({
      id: `user_${Date.now()}`,
      name: signupUser.fullName,
      email: signupUser.email,
      role: "USER",
      avatar: signupUser.fullName
        .split(" ")
        .map((n) => n[0])
        .join(""),
    });
    setActivePage("login");
    showToast("Account created! Please sign in.", "success");
  };

  const renderPage = () => {
    if (isLoading) {
      return (
        <div className="flex-1 flex items-center justify-center bg-[#F9FBFC]">
          <Loading size="lg" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex-1 flex items-center justify-center bg-[#F9FBFC] p-12">
          <ErrorState
            title="Unable to load dashboard"
            message={error}
            onRetry={() => {
              setError(null);
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 1000);
            }}
          />
        </div>
      );
    }

    const pageProps = {
      tickets: filteredTickets,
      onSelectTicket: handleTicketSelect,
      filters: filters,
      onFilterChange: handleFilterChange,
      onClearFilters: handleClearFilters,
    };

    switch (activePage) {
      case "dashboard":
        return <Dashboard {...pageProps} />;
      case "all-tickets":
        return <AllTickets {...pageProps} />;
      case "create-ticket":
        return (
          <CreateTicket
            onCreateTicket={handleCreateTicket}
            onCancel={() => setActivePage("dashboard")}
          />
        );
      case "profile":
        return (
          <Profile
            user={user}
            onUpdateUser={handleUpdateUser}
            onLogout={handleLogout}
          />
        );
      case "ticket-details":
        return <TicketDetails ticketId={selectedTicketId} tickets={tickets} />;
      default:
        return <Dashboard {...pageProps} />;
    }
  };

  // If not authenticated, only show Login/Signup
  if (!isAuthenticated) {
    if (activePage === "signup") {
      return (
        <>
          <Signup
            onNavigateToLogin={() => setActivePage("login")}
            onSignup={handleSignup}
            showToast={showToast}
          />
          <Toast {...toast} onClose={hideToast} />
        </>
      );
    }
    return (
      <>
        <Login
          onNavigateToSignup={() => setActivePage("signup")}
          onLogin={handleLogin}
          showToast={showToast}
        />
        <Toast {...toast} onClose={hideToast} />
      </>
    );
  }

  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar
        activePage={activePage}
        onPageChange={setActivePage}
        onLogout={handleLogout}
        user={user}
      />
      {renderPage()}
      <Toast {...toast} onClose={hideToast} />
    </div>
  );
}

export default App;
