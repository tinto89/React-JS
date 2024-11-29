import { Navbar, Nav, Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

export default function MyNav({ setSearchValue, setCategory }) {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary mb-3 fixed-top p-1"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <NavLink to="/" className={"nav-link"}>
          <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={"nav-link"}>
              Home
            </NavLink>
            <NavLink to="/about" className={"nav-link"}>
              About
            </NavLink>
            <NavLink to="/browse" className={"nav-link"}>
              Browse
            </NavLink>
            <Dropdown setCategory={setCategory} />
          </Nav>
          <SearchBar setSearchValue={setSearchValue} />;
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
