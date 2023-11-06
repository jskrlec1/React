import React from "react";

const Eventi = () => {
  const handleButtonClick = (event) => {
    console.log("Button click!");
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Klikni me!</button>
    </div>
  );
};

export default Eventi;