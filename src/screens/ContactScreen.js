import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const ContactScreen = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Merci ! Votre message a été envoyé.");
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Contactez-nous</h2>
      <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
        <Form.Group className="mb-3">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Votre nom" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Votre email" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Votre message" required />
        </Form.Group>
        <Button variant="primary" type="submit">Envoyer</Button>
      </Form>
    </Container>
  );
};

export default ContactScreen;