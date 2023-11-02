import React from 'react';

function ConditionalRendering(props) {
  if (props.number === undefined) {
    return null; // Ako je broj nedefiniran, ne prikazujemo ništa
  } else if (props.number % 2 === 0) {
    return <p>Broj je paran.</p>;
  } else {
    return <p>Broj je neparan.</p>;
  }
}

export default ConditionalRendering;
