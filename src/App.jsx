import React from "react";
import Sidebar from "./components/ui/SideBar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex min-h-screen font-sans">
      {/* hardcode activePage to 'dashboard' so the sidebar link stays highlighted */}
      <Sidebar activePage="dashboard" />
      <Dashboard />
    </div>
  );
}

export default App;
