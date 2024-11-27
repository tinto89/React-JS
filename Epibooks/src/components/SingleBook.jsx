import { Button, Card, Col } from "react-bootstrap";
import Dotdotdot from "react-dotdotdot";
import { useNavigate } from "react-router-dom";

export default function SingleBook({ book, isSelected, onBookSelect }) {
  const navigate = useNavigate();

  return (
    <Col md={4} className="mb-3">
      <Card
        className={`d-flex flex-column ${
          isSelected ? "border-2 border-danger" : ""
        }`}
        style={{
          height: 440,
          cursor: "pointer",
        }}
        onClick={onBookSelect}
      >
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          style={{ height: 325 }}
        />
        <Card.Body>
          <Dotdotdot clamp={1}>
            <Card.Title className="text-center">{book.title}</Card.Title>
          </Dotdotdot>
          <Button
            className="w-100 mt-2"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/book_details/${book.asin}`);
            }}
          >
            Dettagli
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
