export default function FilterCard() {
  return (
    <div className="filtersCard">
      <h2 className="filtersTitle">Filtres et comparaison</h2>
      <div className="filtersBar">
        <div className="filterGroup">
          <label className="filterLabel">Catégorie :</label>
          <select className="filterSelect">
            <option>toutes catégories</option>
            <option>pistolets</option>
            <option>fusils</option>
            <option>snipers</option>
            <option>mitrailleuses</option>
          </select>
        </div>
        <div className="filterGroup">
          <label className="filterLabel">Trier par :</label>
          <select className="filterSelect">
            <option>Nom</option>
            <option>Prix croissant</option>
            <option>Prix décroissant</option>
            <option>Dégâts</option>
            <option>Précision</option>
          </select>
        </div>
      </div>
    </div>
  );
}
