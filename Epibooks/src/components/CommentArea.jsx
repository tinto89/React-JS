import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRjYjk2MmM5MjI4ZDAwMTVmYWQyYTkiLCJpYXQiOjE3MzMwODE0NDIsImV4cCI6MTczNDI5MTA0Mn0.BnPpDizPDCQUbRM3D1BGAHBL28Dq56rISZ6hFP3SAXc";

export default function CommentArea({ book, details }) {
  const [comments, setComments] = useState([]);
  const [reload, setReload] = useState(null);

  useEffect(() => {
    let API_LINK = "";

    if (book) {
      API_LINK = `https://striveschool-api.herokuapp.com/api/comments/${book.asin}`;
    } else if (details) {
      API_LINK = `https://striveschool-api.herokuapp.com/api/comments/${details.asin}`;
    } else {
      return;
    }

    fetch(API_LINK, {
      headers: {
        Authorization: API_TOKEN,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore del server");
        }
        return response.json();
      })
      .then((data) => {
        setComments(data);
        setReload(false);
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  }, [book, details, reload]);

  if (!book && !details) {
    return <div>Select a book to see comments...</div>;
  }

  return comments.length === 0 ? (
    <>
      <div className="mb-2">This book does not have any comments yet.</div>
      <AddComment asin={book?.asin} setReload={setReload} />
    </>
  ) : (
    <>
      <AddComment asin={details?.asin} setReload={setReload} />
      {comments.map((singleComment) => (
        <CommentList singleComment={singleComment} key={singleComment._id} />
      ))}
    </>
  );
}
