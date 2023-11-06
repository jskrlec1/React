import React, { useState } from "react";
import StateLess from "./StateLess";

const StateFull = () => {
  const state = { color: "red", count: 0 };
  const [counter, setCounter] = useState(state.count);

  return (
    <div>
      <StateLess
        count={counter}
        color={state.color}
        onButtonClick={() => setCounter(counter + 1)}
      />
    </div>
  );
};

export default StateFull;