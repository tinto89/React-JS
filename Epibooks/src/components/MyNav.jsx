import { Navbar, Nav, Container } from "react-bootstrap";
import SearchBar from "./SearchBar";

export default function MyNav({ setSearchValue }) {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary mb-3 fixed-top p-1"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          <SearchBar setSearchValue={setSearchValue} />;
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
