import React from "react";
import { useState, useEffect } from 'react';

function Counter({ initialCount = 0 }: { initialCount?: number }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((c: number) => c + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(initialCount)}>RESET</button>
    </div>
  );
}

export { Counter };
