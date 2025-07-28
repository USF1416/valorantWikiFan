import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link
        to="/home"
        className="logoXtitle"
        style={{ display: "flex", textDecoration: "none" }}
      >
        <img
          src="./img/palorant-icon.webp"
          alt="Logo mof=difié du jeu Valorant de Riot"
          width="50px"
        />
        <div style={{ paddingLeft: "5%" }}>
          <h1
            style={{
              fontSize: "1.1rem",
              fontWeight: "700",
              color: "#0f1419",
              lineHeight: "1",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontFamily: "Inter",
            }}
          >
            valorant
          </h1>
          <h1
            style={{
              fontSize: "0.8rem",
              fontWeight: "500",
              color: "#5a5a5a",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontFamily: "Inter",
            }}
          >
            pro guide
          </h1>
        </div>
      </Link>
      <div className="searchBar">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          placeholder="Rechercher agents, armes, cartes..."
          type="search"
          className="searchBar-input"
        />
      </div>
      <label class="ui-switch">
        <input type="checkbox" />
        <div class="slider">
          <div class="circle"></div>
        </div>
      </label>
    </header>
  );
}
