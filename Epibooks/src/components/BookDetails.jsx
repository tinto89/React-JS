import { Card, CardTitle, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CommentArea from "./CommentArea";
import NotFound from "./NotFound";

export default function BookDetails({ category }) {
  const params = useParams();

  const foundBook = category.find((book) => book.asin === params.asin);
  if (!foundBook) {
    return <NotFound />;
  }

  return (
    <Container>
      <Row>
        <Col md={4}>
          <CardTitle className="text-center mb-2">{foundBook.title}</CardTitle>
          <Card>
            <Card.Img variant="top" src={foundBook.img} alt={foundBook.title} />
          </Card>
        </Col>
        <Col md={8}>
          <CommentArea details={foundBook} />
        </Col>
      </Row>
    </Container>
  );
}
