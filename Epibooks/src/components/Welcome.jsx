import { Alert } from "react-bootstrap";

export default function Welcome({ category }) {
  return (
    <Alert className="text-center">
      <h1>EpiBooks: our library {category[0].category}</h1>
    </Alert>
  );
}
