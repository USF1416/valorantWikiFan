import { useEffect, useState } from "react";
import { fetchValorantData } from "../api/valorant-unofficial-api";

export default function Cartes() {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    const getMaps = async () => {
      const data = await fetchValorantData("maps");
      setMaps(data);
    };
    getMaps();
  }, []);

  return (
    <div>
      <h2>Cartes</h2>
      <ul>
        {maps.map((map) => (
          <li key={map.uuid}>{map.displayName}</li>
        ))}
      </ul>
    </div>
  );
}
