import { Row } from "react-bootstrap";
import horror from "../books/horror.json";
import SingleBook from "./SingleBook";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function AllTheBooks() {
  const [searchValue, setSearchValue] = useState("");

  const searchedBooks = horror.filter((book) =>
    book.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <SearchBar setSearchValue={setSearchValue} />
      <Row className="g-2">
        {searchedBooks.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
      </Row>
    </>
  );
}
