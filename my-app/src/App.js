import "./App.css";
import Komponentaklase from "./Komponente/komponentaklase";
import Logoperator from "./Komponente/logoperator";
import Varijabla from "./Komponente/varijabla";
import Zadaca from "./Komponente/zadaca";

function App() {
  const user = "Ivan Horvat";

  return (
    <div className="App">
      <Zadaca />
      <Varijabla user={user} />
      <Logoperator user={user} />
      <Komponentaklase user={user} />
    </div>
  );
}

export default App;

/* 1.	Potrebno je napraviti dvije komponente
	2.	Glavna komponenta poziva drugu komponentu ConditionalRendering sa svojstvom (props) number
	3.	U ovisnusti o poslanom broju treba ispisati drukčiji tekst
	4.	Ako se pošalje nedefinirani broj, komponenta ConditionalRendering ništa ne ispisuje*/
