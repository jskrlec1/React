import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    // count = count + 1;
  }
  return (
    <div>
      <button onClick={handleClick}>You pressed me {count} times</button>
    </div>
  );
};

export default Counter;