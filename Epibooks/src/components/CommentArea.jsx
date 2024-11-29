import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//useEffect;

export default function CommentArea({ book, details }) {
  if (!book && !details) {
    return <div>Select a book to see comments...</div>;
  }
  if (book) {
    return <h2 className="text-center">{book.asin}</h2>;
  }

  if (details) {
    return <h2 className="text-center">{details.title}</h2>;
  }
}
