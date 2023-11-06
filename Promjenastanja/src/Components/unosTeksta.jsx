import React, { useState } from "react";

const UnosTeksta = () => {
  const [text, setText] = useState("Bok");
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <input value={text} onChange={handleChange} />
      <p>Napisao si: {text}</p>
      <button onClick={() => setText("Bok!")}>Reset</button>
    </div>
  );
};

export default UnosTeksta;