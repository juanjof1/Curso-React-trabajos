import React, { useState } from "react";

export const Counter: React.FC = () => {
  // state = {count:0}
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>{" "}
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </>
  );
};
