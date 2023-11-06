import "./App.css";
import Komponentaklase from "./Components/komponentaklase";
import Logoperator from "./Components/logoperator";
import Varijabla from "./Components/varijabla";
import Zadaca from "./Components/zadaca";
import Prezimena from "./Components/Prezimena";
import MainComponent from "./Components/MainComponent";
import ConditionalRendering from "./Components/ConditionalRendering";
function App() {
  const user = "Ivan Horvat";

  return (
    <div className="App">
      <Zadaca />
      <Varijabla user={user} />
      <Logoperator user={user} />
      <Komponentaklase user={user} />
      <Prezimena user={user} />
      <MainComponent user={user} />
      <ConditionalRendering user={user} />
    </div>
  );
}

export default App;

/* 1.	Potrebno je napraviti dvije komponente
	2.	Glavna komponenta poziva drugu komponentu ConditionalRendering sa svojstvom (props) number
	3.	U ovisnusti o poslanom broju treba ispisati drukčiji tekst
	4.	Ako se pošalje nedefinirani broj, komponenta ConditionalRendering ništa ne ispisuje*/
