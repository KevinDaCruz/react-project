import Header from "./components/Header";
import Footer from "./components/Footer";
import Dish from "./components/Dish";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Row className="gx-3">
            <Col xs={12} md={4}>
              <Dish
                name="Tacos à l’unité"
                price={3}
                image="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
              />
            </Col>
            <Col xs={12} md={4}>
              <Dish
                name="Enchiladas"
                price={12}
                image="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
              />
            </Col>
            <Col xs={12} md={4}>
              <Dish
                name="Mole poblano"
                price={15}
                image="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
              />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
