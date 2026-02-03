import React from "react";
import { useState } from "react";
import Sidebar from "./components/ui/SideBar";
import Dashboard from "./pages/Dashboard";
import AllTickets from "./pages/AllTickets";

function App() {
  // 1. Re-add state to track which page is active
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="flex min-h-screen font-sans">
      {/* 2. Pass the state and the setter to the Sidebar */}
      <Sidebar activePage={activePage} onPageChange={setActivePage} />

      {/* 3. Use a conditional check to switch between the two pages */}
      {activePage === "dashboard" ? <Dashboard /> : <AllTickets />}
    </div>
  );
}

export default App;
