import React from "react";

const Varijabla = (props) => {
  // const user = "Ivan Horvat";
  const { user } = props;

  const greetings = user.startsWith("Ivan") ? (
    <p>Hello Friend!</p>
  ) : (
    <p>Hello Stranger!</p>
  );

  return <div>{greetings}</div>;
};

export default Varijabla;