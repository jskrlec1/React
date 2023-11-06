// App.jsx
import React from "react";
import "./App.css";
import Logo from "./Components/Logo";
// Uvezi Logo komponentu

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo /> {/* Koristi Logo komponentu */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
