import { useEffect, useState } from "react";
import { fetchValorantData } from "../api/valorant-unofficial-api";

export default function Agents() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const getAgents = async () => {
      const data = await fetchValorantData("agents");
      setAgents(data);
    };
    getAgents();
  }, []);

  return (
    <div>
      <h2>Liste des Agents</h2>
      <ul>
        {agents.map((agent) => (
          <li key={agent.uuid}>{agent.displayName}</li>
        ))}
      </ul>
    </div>
  );
}
