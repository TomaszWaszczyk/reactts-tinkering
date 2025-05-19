import { useState, useEffect } from 'react';

function Countdown({ initialCount = 10 }: { initialCount?: number }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (count <= 0) return;
    const timerId = setInterval(() => {
      setCount((c: number) => c - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [count]);

  return (
    <div>
      <h1>Countdown: {count}</h1>
      <button onClick={() => setCount(initialCount)}>RESTART</button>
    </div>
  );
}

export default Countdown;
