import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import BookDetails from "./components/BookDetails";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <BrowserRouter>
        <MyNav setSearchValue={setSearchValue} />
        <Container className="mycontainer">
          <Row>
            <Col md={12}>
              <Welcome />
            </Col>
            <Routes>
              <Route
                path="/"
                element={<AllTheBooks searchValue={searchValue} />}
              />
              <Route path="/book_details/:asin" element={<BookDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Row>
        </Container>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
