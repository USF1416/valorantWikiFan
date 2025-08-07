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
        style={{display: "flex" }}
      >
        <GroupWeaponsCard categoryLabel="pistols" />
        <div>
          <GroupWeaponsCard categoryLabel="smgs" />
          <GroupWeaponsCard categoryLabel="shotguns" />
        </div>
        <GroupWeaponsCard categoryLabel="rifles" />
        <div>
          <GroupWeaponsCard categoryLabel="sniper rifles" />
          <GroupWeaponsCard categoryLabel="heavy weapons" />
        </div>
      </div>
    </>
  );
}
