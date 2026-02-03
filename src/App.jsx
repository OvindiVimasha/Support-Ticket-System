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

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard onSelectTicket={handleTicketSelect} />;
      case "all-tickets":
        return <AllTickets onSelectTicket={handleTicketSelect} />;
      case "create-ticket":
        return <CreateTicket />;
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
