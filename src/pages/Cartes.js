import { useEffect, useState } from "react";
import { fetchValorantData } from "../api/valorant-unofficial-api";
import NavHeader from "../components/NavHeader";

export default function Cartes() {
  const [maps, setMaps] = useState([]);
  const headerSubtitle =
    "Devenez Radiant sur chacune des cartes du jeu.";

  useEffect(() => {
    const getMaps = async () => {
      const data = await fetchValorantData("maps");
      setMaps(data);
    };
    getMaps();
  }, []);

  return (
    <>
      <NavHeader title="Cartes" subtitle={headerSubtitle} />
      <ul>
        {maps.map((map) => (
          <li key={map.uuid}>{map.displayName}</li>
        ))}
      </ul>
    </>
  );
}
