import NavHeader from "../components/NavHeader";
import GroupWeaponsCard from "../components/GroupWeaponsCard";

export default function Arsenal() {
  const headerSubtitle =
    "Guide complet de toutes les armes avec statistiques détaillées et conseils d'utilisation";

  return (
    <>
      <NavHeader title="Arsenal" subtitle={headerSubtitle} />
      <div
        class="weaponsCardsDashboard"
        style={{ display: "flex", border: "1px solid blue" }}
      >
        <GroupWeaponsCard
          categoryLabel="pistols"
        />
        <div style={{ border: "1px solid red" }}>
          <GroupWeaponsCard categoryLabel="smgs" />
          <GroupWeaponsCard categoryLabel="shotguns" />
        </div>
        <GroupWeaponsCard categoryLabel="rifles" />
        <div style={{ border: "1px solid red" }}>
          <GroupWeaponsCard categoryLabel="sniper rifles" />
          <GroupWeaponsCard categoryLabel="heavy weapons" />
        </div>
      </div>
    </>
  );
}
