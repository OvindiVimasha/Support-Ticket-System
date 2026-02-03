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

import { MOCK_TICKETS, MOCK_USER } from "./data/mockData";

function App() {
  const [activePage, setActivePage] = useState(
    () => localStorage.getItem("activePage") || "dashboard",
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("isAuthenticated") === "true",
  );
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
    switch (activePage) {
      case "dashboard":
        return (
          <Dashboard tickets={tickets} onSelectTicket={handleTicketSelect} />
        );
      case "all-tickets":
        return (
          <AllTickets tickets={tickets} onSelectTicket={handleTicketSelect} />
        );
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
        return (
          <Dashboard tickets={tickets} onSelectTicket={handleTicketSelect} />
        );
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
