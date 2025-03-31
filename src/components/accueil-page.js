// Accueil.js
import React from 'react';
import '../style/AccueilStyle.css';

function Accueil() {
  return (
    <div>
      <section className="game-presentation">
        <h2>Présentation de Valorant</h2>
        <img 
          src="/img/valorant-agent-key-art-ep7.png" 
          alt="Valorant agent key art ep7" 
          className="presentation-image"
        />
        <p>
          Valorant est un jeu de tir tactique à la première personne développé et édité par Riot Games. 
          Lancé en 2020, il se concentre sur des affrontements compétitifs entre deux équipes de 5 joueurs, 
          avec des personnages uniques appelés Agents.
        </p>
      </section>

      {/* Section de présentation de Riot Games */}
      <section className="riot-presentation">
        <h2>À propos de Riot Games</h2>
        <img 
          src="https://esportbet.com/wp-content/smush-webp/2022/11/riot-games.jpg.webp" 
          alt="Riot Games Logo" 
          className="presentation-image"
        />
        <p>
          Riot Games est une entreprise américaine de développement de jeux vidéo, 
          connue pour des titres à succès tels que League of Legends et Valorant. 
          Fondée en 2006, elle est un acteur majeur dans l'industrie du jeu vidéo et des esports.
        </p>
      </section>
    </div>
  );
}

export default Accueil;