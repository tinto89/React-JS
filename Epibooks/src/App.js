import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

import AllTheBooks from "./components/AllTheBooks";
import { Container } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <MyNav setSearchValue={setSearchValue} />
      <Container style={{ marginTop: 100, marginBottom: 50 }}>
        <AllTheBooks searchValue={searchValue} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
