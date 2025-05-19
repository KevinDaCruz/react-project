import { Card } from "react-bootstrap";
import "../assets/styles/dish.scss";

export default function Dish({ name, price, image }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price} €</Card.Text>
      </Card.Body>
    </Card>
  );
}
