import { useEffect, useState } from "react";
import { fetchValorantData } from "../api/valorant-unofficial-api";

export default function Arsenal() {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    const getWeapons = async () => {
      const data = await fetchValorantData("weapons");
      setWeapons(data);
    };
    getWeapons();
  }, []);

  return (
    <div>
      <h2>Arsenal</h2>
      <ul>
        {weapons.map((weapon) => (
          <li key={weapon.uuid}>{weapon.displayName}</li>
        ))}
      </ul>
    </div>
  );
}
