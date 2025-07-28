import { useEffect, useState } from "react";
import { fetchValorantData } from "../api/valorant-unofficial-api";

export default function Home() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const getAgents = async () => {
      const data = await fetchValorantData("agents");
      setAgents(data.slice(0, 3)); // affiche juste 3 agents
    };
    getAgents();
  }, []);

  return (
    <div>
      <h2>Accueil - Aperçu des Agents</h2>
      <ul>
        {agents.map((agent) => (
          <li key={agent.uuid}>{agent.displayName}</li>
        ))}
      </ul>
    </div>
  );
}
