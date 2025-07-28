export default function NavHeader({ title, subtitle }) {
  return (
    <div className="arsenalHeader">
      <h1 className="sectionTitle">{title}</h1>
      <p className="sectionSubtitle">{subtitle}</p>
    </div>
  );
}
