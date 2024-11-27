import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import horror from "../books/horror.json";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import "../App.css";

export default function AllTheBooks({ searchValue }) {
  const [selected, setSelected] = useState(null);

  const searchedBooks = horror.filter((book) =>
    book.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <Row className="g-2 main-row">
        <Col md={10} className="row me-2">
          {searchedBooks.map((book) => (
            <SingleBook
              key={book.asin}
              book={book}
              isSelected={selected?.asin === book.asin} // Controlla se è selezionato
              onBookSelect={() => setSelected(book)} // Imposta il libro selezionato
            />
          ))}
        </Col>
        <Col md={2} className="comment-area">
          <CommentArea book={selected} />
          {/* Passa il libro selezionato */}
        </Col>
      </Row>
    </>
  );
}
