import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" className="navbar-dark bg-primary shadow-sm">
      <Container>

        {/* LOGO + TITRE */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="/rva1.png"
            alt="RVA"
            width="55"
            height="55"
            className="me-2 rounded-circle bg-white p-1"
          />

          <div>
            <div className="fw-bold text-white">RVA</div>
            <small className="text-light">
              Aéroport International de Ndjili
            </small>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center">

            <LinkContainer to="/">
              <Nav.Link>Accueil</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/flights">
              <Nav.Link>Vols</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link>Infos</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>

            {/* BOUTON PRO */}
            <Button variant="light" className="ms-3 fw-bold">
              Réserver
            </Button>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;