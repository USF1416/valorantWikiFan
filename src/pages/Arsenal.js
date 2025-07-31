import NavHeader from "../components/NavHeader";
import GroupWeaponsCard from "../components/GroupWeaponsCard";

export default function Arsenal() {
  const headerSubtitle =
    "Guide complet de toutes les armes avec statistiques détaillées et conseils d'utilisation";
  const weaponCategoryTab = {
    "pistols": [1, "1 / span 2"],
    "smgs": [2, 1],
    "shotguns": [2, undefined],
    "rifles": [3, "1 / span 2"],
    "sniper rifles": [4, 1],
    "heavy weapons": [4, undefined],
  };
  return (
    <>
      <NavHeader title="Arsenal" subtitle={headerSubtitle} />
      <div class="weaponsCardsDashboard">
        {Object.entries(weaponCategoryTab).map(([category, position]) => (
          <GroupWeaponsCard
            categoryLabel={category}
            column={position[0]}
            row={position[1]}
          />
        ))}
      </div>
    </>
  );
}
