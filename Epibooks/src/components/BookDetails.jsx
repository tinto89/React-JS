import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CommentArea from "./CommentArea";
import horror from "../books/horror.json";
import NotFound from "./NotFound";

export default function BookDetails() {
  const params = useParams();

  const foundBook = horror.find((book) => book.asin === params.asin);
  if (!foundBook) {
    return <NotFound />;
  }

  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <Card>
          <Card.Img variant="top" src={foundBook.img} />
          <Card.Body>
            <Card.Title className="text-center">{foundBook.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <CommentArea asin={params.asin} />
      </Col>
    </Row>
  );
}
