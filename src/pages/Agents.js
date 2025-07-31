import { useEffect, useState } from "react";
import { fetchValorantData } from "../api/valorant-unofficial-api";
import NavHeader from "../components/NavHeader";

export default function Agents() {
  const [agents, setAgents] = useState([]);
  const headerSubtitle =
    "Découvrez votre agent avec son rôles et ses capacités respectives.";

  useEffect(() => {
    const getAgents = async () => {
      const data = await fetchValorantData("agents");
      setAgents(data);
    };
    getAgents();
  }, []);

  return (
    <>
      <NavHeader title="Agents" subtitle={headerSubtitle} />
      <ul>
        {agents.map((agent) => (
          <li key={agent.uuid}>{agent.displayName}</li>
        ))}
      </ul>
    </>
  );
}
