import React, { useState } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import FlightCard from "../components/FlightCard";

const FlightsScreen = () => {
  const [flights] = useState([
    { airline: "Air Congo", departure: "Kinshasa", destination: "Brazzaville", date: "2026-04-10", time: "12:00", status: "On Time" },
    { airline: "RVA Airlines", departure: "Kinshasa", destination: "Lubumbashi", date: "2026-04-11", time: "14:30", status: "Delayed" },
    { airline: "Air Afrique", departure: "Kinshasa", destination: "Paris", date: "2026-04-12", time: "18:00", status: "On Time" },
    { airline: "Congo Express", departure: "Kinshasa", destination: "Goma", date: "2026-04-13", time: "20:00", status: "On Time" },
  ]);

  const [filter, setFilter] = useState({
    departure: "",
    destination: "",
    date: ""
  });

  const filteredFlights = flights.filter(f =>
    f.departure.toLowerCase().includes(filter.departure.toLowerCase()) &&
    f.destination.toLowerCase().includes(filter.destination.toLowerCase()) &&
    f.date.includes(filter.date)
  );

  return (
    <Container className="my-5">

      {/* Titre moderne */}
      <h2 className="text-center mb-4 fw-bold">
        ✈️ Tableau des Vols en Temps Réel
      </h2>

      {/* FILTRES MODERNES */}
      <Card className="p-3 shadow-sm mb-4 border-0">
        <Row className="g-3">

          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="📍 Départ"
              value={filter.departure}
              onChange={e => setFilter({ ...filter, departure: e.target.value })}
            />
          </Col>

          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="🎯 Destination"
              value={filter.destination}
              onChange={e => setFilter({ ...filter, destination: e.target.value })}
            />
          </Col>

          <Col md={4}>
            <Form.Control
              type="date"
              value={filter.date}
              onChange={e => setFilter({ ...filter, date: e.target.value })}
            />
          </Col>

        </Row>
      </Card>

      {/* LISTE DES VOLS */}
      <Row className="g-4">
        {filteredFlights.map((f, i) => (
          <Col md={4} key={i}>
            <FlightCard flight={f} />
          </Col>
        ))}
      </Row>

    </Container>
  );
};

export default FlightsScreen;