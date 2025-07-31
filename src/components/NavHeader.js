export default function NavHeader({ title, subtitle }) {
  return (
    <div style={{ marginBottom: "2rem", border:"1px solid black" }}>
      <h1 className="headerTitle">{title}</h1>
      <p className="headerSubtitle">{subtitle}</p>
    </div>
  );
}
