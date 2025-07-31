export default function WeaponsCard({ image, name, price }) {
  return (
    <div class="WeaponCard" style={{ backgroundImage: `url(${image})` }}>
      <div class="WeaponCardHeader">
        <span class="WeaponCardHeaderText">{price}</span>
        <h2 class="WeaponCardHeaderText">{name}</h2>
      </div>
    </div>
  );
}
