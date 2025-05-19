export default function Dish({ name, price, image }) {
  return (
    <main>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{price}</p>
    </main>
  );
}
