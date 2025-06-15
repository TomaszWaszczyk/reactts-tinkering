import react from 'react';
import { useEffect, useState } from 'react';

function IncrementDecrementBtn( {initialCount = 100}) {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    }

    useEffect(() => {
        // let data;
        fetch('https://dog.ceo/api/breeds/image/random/3')
            .then(response => {
                if(!response.ok){
                    throw new Error('');
                }
                // data = response;
                return response.json();
            })

        }, [])

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default IncrementDecrementBtn;
