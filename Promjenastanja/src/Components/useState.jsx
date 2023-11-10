import React, { useState } from "react";

const Zadatak = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [birthYear, setbirthYear] = useState(1960);
  const [liked, setLiked] = useState(false);

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleChange(e) {
    setLiked(e.target.checked);
  }

  const fullName = firstName + " " + lastName;
  return (
    <>
      <h2>Podaci o osobi</h2>
      <label>
        First name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:{" "}
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <label>
        <input type="checkbox" checked={liked} onChange={handleChange} />
        Putnik sam
      </label>
      <p>
        Bok, ja sam{" "}
        <b>
          {fullName}, rođen sam {1960} i {liked ? "Putnik sam" : "nisam putnik"}
        </b>
      </p>
      <button onClick={() => alert("Bok " + fullName)}>Reci Bok osobi</button>
    </>
  );
};

export default Zadatak;