import React, { useEffect, useState } from "react";
import { Card, Badge } from "react-bootstrap";

export default function Quote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const quoteId = urlParams.get("id");

    fetch(process.env.REACT_APP_QUOTES_API + "/" + quoteId)
      .then((res) => res.json())
      .then((data) => setQuote(data));
  };

  if (quote)
    return (
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>{quote.author}</Card.Title>
          <Card.Text>{quote.content}</Card.Text>
          {quote.tags.map((t) => (
            <Badge style={{marginRight: "5px"}} pill bg="primary">{t}</Badge> 
          ))}
        </Card.Body>
      </Card>
    );
  return null;
}
