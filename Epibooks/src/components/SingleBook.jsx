import { Card, Col } from "react-bootstrap";

export default function SingleBook({ book }) {
  return (
    <Col md={4}>
      <Card className="d-flex flex-column" style={{ height: 640 }}>
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          style={{ height: 525 }}
        />
        <Card.Body>
          <Card.Title className="text-center">{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}
