import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      sticky="top"
      style={{
        padding: "12px 0",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <Container>

        {/* LOGO (DEPUIS PUBLIC FOLDER) */}
        <Navbar.Brand
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src="/rva1.png"   // ✅ image depuis public/
            alt="RVA Logo"
            width="100"
            height="100"
            style={{
              objectFit: "contain",
              borderRadius: "50%",
              backgroundColor: "white",
              padding: "3px",
            }}
          />

          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            Aéroport RVA 
          </span>
        
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto" style={{ gap: "15px" }}>

            <LinkContainer to="/">
              <Nav.Link style={{ padding: "8px 12px" }}>
                Accueil
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/flights">
              <Nav.Link style={{ padding: "8px 12px" }}>
                Vols
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link style={{ padding: "8px 12px" }}>
                Infos
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link style={{ padding: "8px 12px" }}>
                Contact
              </Nav.Link>
            </LinkContainer>

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;