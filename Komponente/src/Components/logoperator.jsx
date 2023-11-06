import React from "react";

const Logoperator = ({ user }) => {
  //   const user = "Marko Horvat";
  const isFriend = user.startsWith("Ivan");

  return (
    <div>
      {isFriend && <p>Hello Amigo!</p>}
      {!isFriend && <p>Hello Foe!</p>}
    </div>
  );
};

export default Logoperator;