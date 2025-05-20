import { Card, Badge } from "react-bootstrap";
import "../assets/styles/dish.scss";

export default function Dish({ name, price, image, isNew }) {
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
      </Card.Body>
    </Card>
  );
}
