import { Card, Badge, Button } from "react-bootstrap";
import "../assets/styles/dish.scss";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Dish({ name, price, image, isNew }) {
  const { dispatch } = useContext(CartContext);

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
        <Button
          variant="primary"
          onClick={() => dispatch({ type: "increment" })}
        >
          Ajouter au panier
        </Button>
        <Button
          variant="danger"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Retirer du panier
        </Button>
      </Card.Body>
    </Card>
  );
}
