import React, { useState, useEffect } from "react";

function Zadatak() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isTraveler, setIsTraveler] = useState(false);
  const [message, setMessage] = useState(
    "Bok, ja sam , rođen sam 1960. i nisam putnik."
  );
  const [backgroundColor, setBackgroundColor] = useState("chartreuse");

  useEffect(() => {
    const travelerStatus = isTraveler ? "putnik sam" : "nisam putnik";
    setMessage(
      `Bok, ja sam ${firstName} ${lastName}, rođen sam 1960. i ${travelerStatus}.`
    );
  }, [firstName, lastName, isTraveler]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleIsTravelerChange = () => {
    setIsTraveler(!isTraveler);
    if (!isTraveler) {
      setBackgroundColor("lightblue");
    } else {
      setBackgroundColor("chartreuse");
    }
  };

  const sayHello = () => {
    if (firstName && lastName) {
      alert(`Bok ${firstName} ${lastName}`);
      setBackgroundColor("yellow"); // Promjena boje pozadine
    } else {
      alert("Molimo vas da unesete ime i prezime.");
    }
  };

  useEffect(() => {
    // Postavljanje boje pozadine kada se promijeni backgroundColor stanje
    document.body.style.backgroundColor = backgroundColor;

    // Poništenje postavki kada se komponenta demontira
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, [backgroundColor]);

  useEffect(() => {
    // Alert kada se promijeni stanje isTraveler
    if (isTraveler) {
      alert("Označeno kao putnik!");
    }
  }, [isTraveler]);

  return (
    <div className="person-info" style={{ backgroundColor: backgroundColor }}>
      <h2>Podaci o osobi</h2>
      <div className="input-row">
        <label className="input-label">First name:</label>
        <input
          type="text"
          placeholder=""
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div className="input-row">
        <label className="input-label">Last name:</label>
        <input
          type="text"
          placeholder=""
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div className="input-row">
        <input
          type="checkbox"
          checked={isTraveler}
          onChange={handleIsTravelerChange}
        />
        <label className="input-label">Putnik sam</label>
      </div>
      <div className="input-row">
        <p className="message">{message}</p>
      </div>
      <div className="button-row">
        <button onClick={sayHello}>Reci Bok</button>
      </div>
    </div>
  );
}

export default Zadatak;
