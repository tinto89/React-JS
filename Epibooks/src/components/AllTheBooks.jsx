import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import "../App.css";

export default function AllTheBooks({ searchValue, category }) {
  const [selected, setSelected] = useState(null);

  const searchedBooks = category.filter((book) =>
    book.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <Row className="g-2">
        <Col md={9} className="row me-2">
          {searchedBooks.map((book) => (
            <SingleBook
              key={book.asin}
              book={book}
              selected={selected?.asin === book.asin}
              selBook={() =>
                selected?.asin === book.asin
                  ? setSelected(null)
                  : setSelected(book)
              }
            />
          ))}
        </Col>
        <Col md={3} className="comment-area">
          <CommentArea book={selected} />
        </Col>
      </Row>
    </>
  );
}
