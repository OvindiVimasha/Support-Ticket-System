import React from "react";
import { useState } from "react";
import Sidebar from "./components/ui/SideBar";
import Dashboard from "./pages/Dashboard";
import CreateTicket from "./pages/CreateTicket";
import AllTickets from "./pages/AllTickets";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState(null);

  const handleTicketSelect = (id) => {
    setSelectedTicketId(id);
    setActivePage("ticket-details");
  };

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard onSelectTicket={handleTicketSelect} />;
      case "all-tickets":
        return <AllTickets onSelectTicket={handleTicketSelect} />;
      case "create-ticket":
        return <CreateTicket />;
      case "profile":
        return <Profile />;
      case "ticket-details":
        return <TicketDetails ticketId={selectedTicketId} />;
      default:
        return <Dashboard onSelectTicket={handleTicketSelect} />;
    }
  };

  // If not authenticated, only show Login/Signup
  if (!isAuthenticated) {
    if (activePage === "signup") {
      return (
        <Signup
          onNavigateToLogin={() => setActivePage("login")}
          onSignup={() => setIsAuthenticated(true)}
        />
      );
    }
    return (
      <Login
        onNavigateToSignup={() => setActivePage("signup")}
        onLogin={() => setIsAuthenticated(true)}
      />
    );
  }

  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />
      {renderPage()}
    </div>
  );
}

export default App;
