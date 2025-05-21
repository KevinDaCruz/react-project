import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.webp";
import "../assets/styles/Header.scss";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { cartCount } = useContext(CartContext);

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="An Mexican food logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Accueil</Nav.Link>
              <Nav.Link>Panier ({cartCount})</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
