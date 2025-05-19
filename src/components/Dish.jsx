export default function Dish({ name, price, image }) {
  return (
    <>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{price}€</p>
    </>
  );
}
