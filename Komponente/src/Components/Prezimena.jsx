/*import React from "react";
import PropTypes from "proptypes";
const Prezimenaprops = { first, last, age, spol };
const user = {
  firstName: first,
  lastName: last,
  age: age,
  gender: spol,
};
return (
  <div>
    <h1>Korisnik</h1>
    <p>Ime: {user.firstName}</p>
    <p>Prezime: {user.lastName}</p>
    <p>Broj godina: {user.age}</p>
    <p>Spol: {user.gender}</p>
  </div>
);

Prezimenaprops.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string,
  age: PropTypes.number.isRequired,
  spol: PropTypes.oneOf(["M", "F"]),
};
export default Prezimenaprops;*/

// Prezimena.jsx
import React from "react";
import PropTypes from "prop-types"; // Ispravka importa

// Definisanje funkcionalne komponente
const Prezimena = ({ first, last, age, spol }) => {
  // Kreiranje objekta user unutar komponente
  const user = {
    firstName: first,
    lastName: last,
    age: age,
    gender: spol,
  };

  // Vraćanje JSX-a
  return (
    <div>
      <h1>Korisnik</h1>
      <p>Ime: {user.firstName}</p>
      <p>Prezime: {user.lastName}</p>
      <p>Broj godina: {user.age}</p>
      <p>Spol: {user.gender}</p>
    </div>
  );
};

// Definisanje PropTypes za komponentu
Prezimena.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string,
  age: PropTypes.number.isRequired,
  spol: PropTypes.oneOf(["M", "F"]),
};

export default Prezimena;
