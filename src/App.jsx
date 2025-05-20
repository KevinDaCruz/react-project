import Header from "./components/Header";
import Footer from "./components/Footer";
import Dish from "./components/Dish";
import { useState } from "react";

// Import du style
import "./assets/styles/App.scss";

import { Container, Row, Col, Button } from "react-bootstrap";

function App() {
  const [showNewOnly, setShowNewOnly] = useState(false);

  const handleShowNewOnly = () => {
    setShowNewOnly(!showNewOnly);
  };

  const dishes = [
    {
      name: "Tacos à l’unité",
      price: 3,
      image:
        "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      isNew: true,
      stock: 12,
    },
    {
      name: "Enchiladas",
      price: 12,
      image:
        "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      isNew: false,
      stock: 0,
    },
    {
      name: "Mole poblano",
      price: 15,
      image:
        "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      isNew: false,
      stock: 5,
    },
  ];

  const filteredDishes = dishes.filter((dish) => {
    if (dish.stock <= 0) return false;
    if (showNewOnly && !dish.isNew) return false;
    return true;
  });

  return (
    <>
      <Header />
      <main>
        <Container>
          <Button variant="primary" onClick={handleShowNewOnly}>
            {showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"}
          </Button>
          <Row className="gx-3">
            {filteredDishes.map((dish, index) => (
              <Col xs={12} md={4} key={index}>
                <Dish
                  name={dish.name}
                  price={dish.price}
                  image={dish.image}
                  isNew={dish.isNew}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
