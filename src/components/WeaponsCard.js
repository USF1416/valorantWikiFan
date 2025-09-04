export default function WeaponsCard({
  widthDimension,
  heightDimension,
  image,
  name,
  price,
}) {
  return (
    <div
      class="WeaponCard"
      style={{
        backgroundImage: `url(${image})`,
        width: `${widthDimension}`,
        height: `${heightDimension}`,
      }}
    >
      <div class="WeaponCardHeader">
        <span class="WeaponCardHeaderText">{price}</span>
        <h2 class="WeaponCardHeaderText">{name}</h2>
      </div>
    </div>
  );
}
