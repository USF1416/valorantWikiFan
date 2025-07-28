import "./AppStyle.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <div style={{ position: "relative" }}>
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </Router>
  );
}
