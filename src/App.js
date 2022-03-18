import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Dashboard from "./views/pages/dashboard/Dashboard";
import NotFound from "./views/pages/404/NotFound";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
