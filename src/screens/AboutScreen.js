import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import heroImage from "../assets/Hero.png";

const AboutScreen = () => {
  return (
    <div>

      {/* HERO IMAGE */}
      

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
    ></div>

      <Container className="my-5">

        {/* DESCRIPTION */}
        <div className="bg-light p-4 rounded shadow mb-4">
          <h3>À propos</h3>
          <p>
            L’Aéroport International de N’Djili est le principal aéroport de
            la République Démocratique du Congo, situé à Kinshasa. Il est le
            centre aérien le plus important du pays.
          </p>

          <p>
            Il dessert des vols nationaux et internationaux vers l’Afrique,
            l’Europe et le Moyen-Orient, et continue de se moderniser pour
            offrir un service de qualité.
          </p>
        </div>

        {/* STATISTIQUES */}
        <Row className="text-center mb-4">

          <Col md={4}>
            <Card className="p-3 shadow-sm">
              <h2>✈️ 1M+</h2>
              <p>Passagers / an</p>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="p-3 shadow-sm">
              <h2>🛫 50+</h2>
              <p>Destinations</p>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="p-3 shadow-sm">
              <h2>🏢 1</h2>
              <p>Grand Terminal International</p>
            </Card>
          </Col>

        </Row>

        {/* INFRASTRUCTURE */}
        <div className="bg-light p-4 rounded shadow mb-4">
          <h3>Infrastructure</h3>
          <ul>
            <li>Terminal passagers moderne</li>
            <li>Zone VIP et salons privés</li>
            <li>Restaurants et boutiques</li>
            <li>Services de sécurité renforcés</li>
            <li>Parking et transport disponible</li>
          </ul>
        </div>

        {/* GOOGLE MAP */}
        <div className="mb-4">
          <h3 className="text-center mb-3">📍 Localisation</h3>

          <iframe
            title="Ndjili Airport"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.709!2d15.440!3d-4.385!"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </Container>
    </div>
  );
};

export default AboutScreen;