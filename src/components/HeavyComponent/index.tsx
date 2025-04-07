import React, { useState } from "react";

const isPrime = (num: number): boolean => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

const HeavyComponent: React.FC = () => {
  const [limit, setLimit] = useState<number>(10);
  const [primes, setPrimes] = useState<number[]>([]);

  const calculatePrimes = () => {
    const primesArray: number[] = [];
    for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) {
        primesArray.push(i);
      }
    }
    setPrimes(primesArray);
  };

  return (
    <div>
      <h1>Prime Number Calculator</h1>
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      />
      <button onClick={calculatePrimes}>Calculate Primes</button>
      <ul>
        {primes.map((prime) => (
          <li key={prime}>{prime}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeavyComponent;
