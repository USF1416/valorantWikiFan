import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ label }) {
  return (
    <Link to={`/${label}`} className="navLink">
      <img
          src={`./img/${label}-icon.webp`}
          alt="Logo modifié du jeu vidéo Valorant"
          width="25px"
        />
      <span className="navLabel">{label}</span>
    </Link>
  );
}
