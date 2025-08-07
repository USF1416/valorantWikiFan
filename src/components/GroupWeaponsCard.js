import { useEffect, useState } from "react";
import { fetchValorantData } from "../api/valorant-unofficial-api";
import WeaponsCard from "../components/WeaponsCard";

export default function GroupWeaponsCard({ categoryLabel }) {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    const getWeapons = async () => {
      const data = await fetchValorantData("weapons");

      // Filtrer uniquement les armes ayant un shopData valide
      const filtered = data.filter((w) => w.shopData?.category);
      setWeapons(filtered);
    };
    getWeapons();
  }, []);

  const getWeaponsByCategory = (category) =>
    weapons
      .filter(
        (w) => w.shopData?.category?.toLowerCase() === category.toLowerCase()
      )
      .sort((a, b) => (a.shopData.cost ?? 0) - (b.shopData.cost ?? 0));

  return (
    <>
      <div>
        <h2 className="weaponCategoryTitle" style={{ textAlign: "center" }}>
          {categoryLabel}
        </h2>
        {getWeaponsByCategory(categoryLabel).map((weapon) => (
          <WeaponsCard
            key={weapon.uuid}
            name={weapon.displayName}
            price={weapon.shopData?.cost ?? "owned"}
            image={weapon.shopData?.newImage ?? weapon.displayIcon}
          />
        ))}
      </div>
    </>
  );
}
