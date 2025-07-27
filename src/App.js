import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./AppStyle.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Agents from "./pages/Agents";
import Cartes from "./pages/Cartes";
import Arsenal from "./pages/Arsenal";
import Contact from "./pages/Contact";
import Apropos from "./pages/Apropos";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/cartes" element={<Cartes />} />
          <Route path="/arsenal" element={<Arsenal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/a propos" element={<Apropos />} />
        </Routes>
        <Header />
        <Sidebar />
        <Dashboard />
      </BrowserRouter>
    </>
  );
}
