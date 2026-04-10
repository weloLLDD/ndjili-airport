import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgb(17, 111, 205)",
        color: "white",
        marginTop: "50px",
        padding: "40px 0",
      }}
    >
      <Container>

        <Row>

          {/* INFO */}
          <Col md={4} className="mb-3">
            <h5>✈️ Aéroport N’Djili</h5>
            <p style={{ fontSize: "14px" }}>
              Plateforme principale de transport aérien en RDC,
              gérée par la RVA. Nous assurons sécurité, confort
              et connectivité internationale.
            </p>
          </Col>

          {/* LIENS */}
          <Col md={4} className="mb-3">
            <h5>Navigation</h5>
            <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
              <li><a href="/" style={{ color: "white" }}>Accueil</a></li>
              <li><a href="/flights" style={{ color: "white" }}>Vols</a></li>
              <li><a href="/about" style={{ color: "white" }}>À propos</a></li>
              <li><a href="/contact" style={{ color: "white" }}>Contact</a></li>
            </ul>
          </Col>

          {/* PARTENAIRES */}
          <Col md={4}>
            <h5>Partenaires</h5>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
               
              <img src="/ethiopians.png" alt="Air France" width="80" />
              <img src="/airfrance.png" alt="Air France" width="80" />  
               <img src="/AIRCONGO.png" alt="Kenya Airways" width="80" />
              <img src="/turkish.png" alt="Kenya Airways" width="80" /> 
              <img src="/airkenya.png" alt="Kenya Airways" width="60" /> 

            </div>
          </Col>

        </Row>

        <hr style={{ borderColor: "rgba(40, 15, 15, 0.2)" }} />

        {/* COPYRIGHT */}
        <div style={{ textAlign: "center", fontSize: "14px" }}>
          © {new Date().getFullYear()} Aéroport International de N’Djili |
          Tous droits réservés
        </div>

      </Container>
    </footer>
  );
};

export default Footer;