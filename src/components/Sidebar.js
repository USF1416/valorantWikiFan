import React from "react";
import NavLink from "./navLink";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <div className="navSection">
          <h2 className="sectionTitle">principal</h2>
          <NavLink label="agents" />
          <NavLink label="cartes" />
          <NavLink label="arsenal" />
        </div>
        <div className="navSection">
          <h2 className="sectionTitle">communauté</h2>
          <NavLink label="contact" />
          <NavLink label="a propos" />
        </div>
        <div>
          <h2 className="sectionTitle">pour plus d'infos</h2>
          <a className="navLink" target="_blank" href="https://playvalorant.com/fr-fr/download">
            <img
              src="./img/manette-icon.webp"
              width="25px"
            />
            <span className="navLabel">installer valorant</span>
          </a>
          <a href="https://www.riotgames.com/fr" target="_blank" className="navLink">
            <img
              src="./img/siteweb-icon.webp"
              width="25px"
            />
            <span className="navLabel">site officiel</span>
          </a>
        </div>
      </nav>
    </aside>
  );
}
