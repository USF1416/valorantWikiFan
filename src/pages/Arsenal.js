import { useEffect, useState } from "react";
import { fetchValorantData } from "../api/valorant-unofficial-api";
import NavHeader from "../components/NavHeader";

export default function Arsenal() {
  const [weapons, setWeapons] = useState([]);
  const headerSubtitle = "Guide complet de toutes les armes avec statistiques détaillées et conseils d'utilisation";

  useEffect(() => {
    const getWeapons = async () => {
      const data = await fetchValorantData("weapons");
      setWeapons(data);
    };
    getWeapons();
  }, []);

  return (
    <main className="arsenalContainer">
      <NavHeader title="Arsenal Valorant" subtitle={headerSubtitle} />
      <ul>
        {weapons.map((weapon) => (
          <li key={weapon.uuid}>{weapon.displayName}</li>
        ))}
      </ul>
    </main>
  );
}
