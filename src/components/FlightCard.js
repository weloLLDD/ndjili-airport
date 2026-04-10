 import React from "react";
import { Card, Badge } from "react-bootstrap";

const FlightCard = ({ flight }) => {
  return (
    <Card className="shadow-lg border-0 rounded-4 h-100 flight-card">

      <Card.Body>

        {/* Airline */}
        <h5 className="fw-bold text-primary">
          ✈️ {flight.airline}
        </h5>

        <hr />

        {/* Route */}
        <p className="mb-1">
          📍 <strong>Départ:</strong> {flight.departure}
        </p>

        <p className="mb-1">
          🎯 <strong>Destination:</strong> {flight.destination}
        </p>

        <p className="mb-1">
          📅 <strong>Date:</strong> {flight.date}
        </p>

        <p className="mb-2">
          ⏰ <strong>Heure:</strong> {flight.time}
        </p>

        {/* Status */}
        <Badge
          bg={flight.status === "On Time" ? "success" : "danger"}
          className="px-3 py-2 rounded-pill"
        >
          {flight.status}
        </Badge>

      </Card.Body>

    </Card>
  );
};

export default FlightCard;