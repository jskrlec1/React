/*import "./App.css";
import StateFull from "./Components/StateFull";
import MyCheckbox from "./Components/checkbox";
import Counter from "./Components/counter";
import Counterr from "./Components/counterr";
import Eventi from "./Components/eventi";
import Form from "./Components/forma";
import KlasPromjenaState from "./Components/klasPromjenaState";
import UnosTeksta from "./Components/unosTeksta";

function App() {
  return (
    <div className="App">
      <Eventi />
      <KlasPromjenaState />
      <hr></hr>
      <Counter />
      <hr></hr>
      <UnosTeksta />
      <hr></hr>
      <MyCheckbox />
      <hr></hr>
      <Form />
      <hr></hr>
      <Counterr />
      <hr></hr>
      <StateFull />
    </div>
  );
}

export default App;*/

import React from "react";
//import "./App.css";
//import Zadatak from "./Components/zadatak"; <UseState = Zadatak/>
import UseState from "./Components/useState";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseState />
      </header>
    </div>
  );
}

export default App;
