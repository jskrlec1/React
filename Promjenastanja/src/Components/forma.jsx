import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(28);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setAge(age + 1)}>Increment age</button>
      <p>
        Hello, {name}. You are {age}.
      </p>
    </>
  );
}