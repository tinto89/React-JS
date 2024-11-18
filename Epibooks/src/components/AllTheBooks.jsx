import { Row } from "react-bootstrap";
import horror from "../books/horror.json";
import SingleBook from "./SingleBook";
import Welcome from "./Welcome";

export default function AllTheBooks({ searchValue }) {
  const searchedBooks = horror.filter((book) =>
    book.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <Welcome />
      <Row className="g-2">
        {searchedBooks.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
      </Row>
    </>
  );
}
