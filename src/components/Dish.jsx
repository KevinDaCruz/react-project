import { Card, Badge, Button } from "react-bootstrap";
import "../assets/styles/dish.scss";
import useCart from "../hooks/useCart";

export default function Dish({ name, price, image, isNew }) {
  const { addToCart, removeFromCart } = useCart();

  return (
    <Card className="position-relative">
      {isNew && (
        <Badge bg="primary" className="position-absolute top-0 end-0 m-2">
          Nouveau
        </Badge>
      )}
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price} €</Card.Text>
        <Button variant="primary" onClick={addToCart}>
          Ajouter au panier
        </Button>
        <Button variant="danger" onClick={removeFromCart}>
          Retirer du panier
        </Button>
      </Card.Body>
    </Card>
  );
}
