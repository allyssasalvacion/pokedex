import React from "react";
import "./Dashboard.css";

import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/search/Search";

function Dashboard() {
  return (
    <main className="dashboard">
      <Navbar />
      <div className="dashboard__contents">
        <Search />
      </div>
    </main>
  );
}

export default Dashboard;
