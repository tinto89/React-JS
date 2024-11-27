import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export default function CommentArea({ book }) {
  if (!book) {
    return <div>Seleziona un libro per vedere i commenti.</div>;
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">{book.asin}</Card.Title>
      </Card.Body>
    </Card>
  );
}
