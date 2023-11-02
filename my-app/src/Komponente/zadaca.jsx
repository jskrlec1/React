import React from "react";

const Zadaca = () => {
  const user = {
    name: "Marko",
    surname: "Horvat",
  };

  const formatUser = (user) => {
    return `${user.name} ${user.surname}`;
  };

  return <p>Hello {formatUser(user)}</p>;
};

export default Zadaca;
