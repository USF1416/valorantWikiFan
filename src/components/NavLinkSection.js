import NavLink from "./NavLinkInput";

export default function NavLinkSection({ title, nbNavLinkInputs = [] }) {
  return (
    <div>
      <h2 className="AsideTitle">{title}</h2>
      {nbNavLinkInputs.map((input) => (
        <NavLink label={input} />
      ))}
    </div>
  );
}
