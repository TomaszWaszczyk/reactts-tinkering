import { useEffect, useState } from 'react';

interface Post {
  title: string;
  body: string;
}

const MyComponent = () => {
  const [data, setData] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://jsonplaceholder.typicode.com/posts/1', { signal })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        setData(json);
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('Request aborted');
        } else {
          setError(error.message);
          console.log('Error:', error);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default MyComponent;
