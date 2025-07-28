import NavLinkSection from "./NavLinkSection";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <NavLinkSection
          title="principale"
          nbNavLinkInputs={["agents", "cartes", "arsenal"]}
        />
        <NavLinkSection
          title="communauté"
          nbNavLinkInputs={["contact", "a propos"]}
        />
        <div>
          <h2 className="AsideTitle">pour plus d'infos</h2>
          <a
            className="navLink"
            target="_blank"
            href="https://playvalorant.com/fr-fr/download"
            rel="noopener noreferrer"
          >
            <img src="./img/manette-icon.webp" alt="" width="25px" />
            <span className="navLabel">installer valorant</span>
          </a>
          <a
            className="navLink"
            target="_blank"
            href="https://www.riotgames.com/fr"
            rel="noopener noreferrer"
          >
            <img src="./img/siteweb-icon.webp" alt="" width="25px" />
            <span className="navLabel">site officiel</span>
          </a>
        </div>
      </nav>
    </aside>
  );
}
