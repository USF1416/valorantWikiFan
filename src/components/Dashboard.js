import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Agents from "../pages/Agents";
import Cartes from "../pages/Cartes";
import Arsenal from "../pages/Arsenal";
import Contact from "../pages/Contact";
import Apropos from "../pages/Apropos";

export default function Dashboard() {
  return (
    <main>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/cartes" element={<Cartes />} />
        <Route path="/arsenal" element={<Arsenal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/a propos" element={<Apropos />} />
      </Routes>
    </main>
  );
}
