import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import heroImage from "../assets/Hero.png";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        display: "flex",
        alignItems: "center",
        color: "white",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.45)",
        }}
      />

      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row>
          <Col className="text-center">
            <h1 style={{ fontWeight: "700", fontSize: "2.5rem" }}>
              Bienvenue à l’Aéroport International Ndjili
            </h1>

            <p style={{ opacity: 0.85, fontSize: "1.1rem" }}>
              Consultez les vols, horaires et informations en temps réel.
            </p>

            <Button
              variant="warning"
              href="/flights"
              style={{
                padding: "10px 25px",
                fontWeight: "600",
                borderRadius: "30px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
            >
              Voir les Vols
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;