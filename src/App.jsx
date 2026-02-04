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

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState(null);
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "success",
  });

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

<<<<<<< Updated upstream
=======
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

  const handleAddComment = (id, newComment) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === id
          ? {
            ...ticket,
            comments: [...ticket.comments, newComment],
            count: (ticket.count || ticket.comments.length) + 1,
          }
          : ticket,
      ),
    );
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

>>>>>>> Stashed changes
  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard onSelectTicket={handleTicketSelect} />;
      case "all-tickets":
        return <AllTickets onSelectTicket={handleTicketSelect} />;
      case "create-ticket":
        return <CreateTicket />;
      case "ticket-details":
<<<<<<< Updated upstream
        return <TicketDetails ticketId={selectedTicketId} />;
=======
        return (
          <TicketDetails
            ticketId={selectedTicketId}
            tickets={tickets}
            user={user}
            onAddComment={handleAddComment}
          />
        );
>>>>>>> Stashed changes
      default:
        return <Dashboard onSelectTicket={handleTicketSelect} />;
    }
  };

  // If not authenticated, only show Login/Signup
  if (!isAuthenticated) {
    if (activePage === "signup") {
      return (
        <>
          <Signup
            onNavigateToLogin={() => setActivePage("login")}
            onSignup={() => {
              setActivePage("login");
              showToast("Account created! Please sign in.", "success");
            }}
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
          onLogin={() => {
            setIsAuthenticated(true);
            showToast("Welcome back!", "success");
          }}
          showToast={showToast}
        />
        <Toast {...toast} onClose={hideToast} />
      </>
    );
  }

  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />
      {renderPage()}
      <Toast {...toast} onClose={hideToast} />
    </div>
  );
}

export default App;
