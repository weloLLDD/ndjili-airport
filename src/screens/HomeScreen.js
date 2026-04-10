import React from "react";
import Hero from "../components/Hero";
import { Container, Row, Col, Card } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <>
      <Hero />

      {/* INTRO */}
      <div className="text-center p-5">
        <h2>Services et Informations</h2>
        <p>
          Nous assurons un transport sécurisé et confortable vers plus de 50 destinations.
        </p>
      </div>

      {/* SERVICES AÉROPORT */}
      <Container className="my-5">
        <h3 className="text-center mb-4">✈️ Nos Services</h3>

        <Row>
          
          {/* Service 1 */}
          <Col md={4} className="mb-3">
            <Card className="shadow-sm text-center p-3">
              <h1>🧳</h1>
              <h5>Bagages sécurisés</h5>
              <p>Service de gestion et sécurité des bagages 24h/24.</p>
            </Card>
          </Col>

          {/* Service 2 */}
          <Col md={4} className="mb-3">
            <Card className="shadow-sm text-center p-3">
              <h1>🛫</h1>
              <h5>Enregistrement rapide</h5>
              <p>Check-in rapide pour éviter les longues files d’attente.</p>
            </Card>
          </Col>

          {/* Service 3 */}
          <Col md={4} className="mb-3">
            <Card className="shadow-sm text-center p-3">
              <h1>🛬</h1>
              <h5>Suivi des vols</h5>
              <p>Informations en temps réel sur les arrivées et départs.</p>
            </Card>
          </Col>

          {/* Service 4 */}
          <Col md={4} className="mb-3">
            <Card className="shadow-sm text-center p-3">
              <h1>🚖</h1>
              <h5>Transport</h5>
              <p>Taxis et navettes disponibles à la sortie de l’aéroport.</p>
            </Card>
          </Col>

          {/* Service 5 */}
          <Col md={4} className="mb-3">
            <Card className="shadow-sm text-center p-3">
              <h1>🍽️</h1>
              <h5>Restaurants</h5>
              <p>Restaurants et cafés dans tout le terminal.</p>
            </Card>
          </Col>

          {/* Service 6 */}
          <Col md={4} className="mb-3">
            <Card className="shadow-sm text-center p-3">
              <h1>📶</h1>
              <h5>Wi-Fi gratuit</h5>
              <p>Connexion internet gratuite dans tout l’aéroport.</p>
            </Card>
          </Col>

        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;