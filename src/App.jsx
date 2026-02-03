import React from "react";
import { useState } from "react";
import Sidebar from "./components/ui/SideBar";
import Dashboard from "./pages/Dashboard";
import CreateTicket from "./pages/CreateTicket";
import AllTickets from "./pages/AllTickets";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  // Helper function to decide which page content to show
  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "all-tickets":
        return <AllTickets />;
      case "create-ticket":
        return <CreateTicket />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />

      {/* Dynamic content area */}
      {renderPage()}
    </div>
  );
}
export default App;
