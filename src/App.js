import "./App.css";
import { useEffect, useState } from "react";
import Component from "./components/Component";
import QuotesList from "./components/QuotesList";
import Quote from "./components/Quote";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {}, [show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const handleChange = (e) => {
    if (e.target.value === "") setShow(false);
    setInput(e.target.value);
  };

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    fontSize: "20px",
    padding: "10px 60px",
    borderRadius: "5px",
    margin: "10px auto",
    cursor: "pointer",
    width: "60%",
    alignText: "center",
    alignItems: "center",
  };

  return (
    <div className="d-flex">
      <QuotesList />
      <Router>
        <Route path="/quote/">
          <Quote />
        </Route>
      </Router>

      {/*
      <header className="App-header">
        {/*}
        <Component />
        <button style={buttonStyle} onClick={handleClick}>
          Click me!
        </button> 
        counter = {counter}
        
        {show && <Component value={input} />}
        <form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          onSubmit={handleSubmit}
        >
          <input
            placeholder="Type something!"
            onChange={handleChange}
            className="field"
            type="text"
          />
          <input style={{ display: "none" }} type="submit" />
        </form>
      </header>
      */}
    </div>
  );
}

export default App;
