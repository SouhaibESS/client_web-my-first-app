import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";
import Component from "./components/Component";

function App() {
  const [counter, setCounter] = useState(0);
  const textInput = useRef(null);

  const handleClick = () => {
    setCounter(counter + 1);
    alert(textInput.current.value);
  };
  

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    fontSize: "20px",
    padding: "10px 60px",
    borderRadius: "5px",
    margin: "10px 0px",
    cursor: "pointer",
  };

  return (
    <div className="App">
      <header className="App-header">
        {/*}
        <Component />
        <button style={buttonStyle} onClick={handleClick}>
          Click me!
        </button> 
        counter = {counter}
        */}
        <input type="text" ref={textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={handleClick}
        ></input>
      </header>
    </div>
  );
}

export default App;
