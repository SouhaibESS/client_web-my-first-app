import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";

export default function QuotesList() {
  const [quotes, setQuotes] = useState([]);
  const [showQuotes, setShowQuotes] = useState(false);

  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    setShowQuotes(true);
  }, [quotes]);

  const renderQuotes = () => {
    return quotes.map((q) => {
      return (
        <ListGroup.Item key={q._id} action href={"/quote/?id=" + q._id}>
          {q.content}
        </ListGroup.Item>
      );
    });
  };

  const fetchQuotes = () => {
    fetch(process.env.REACT_APP_QUOTES_API)
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.results);
      });
  };

  return (
    <div  style={{width: "25%"}}>
      <ListGroup>{showQuotes && renderQuotes()}</ListGroup>
    </div>
  );
}
