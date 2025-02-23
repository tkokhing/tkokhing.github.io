'use client';

import { useEffect, useState } from 'react';

const Home = () => {
  const [message, setMessage] = useState('');
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        setMessage('Forward button was clicked!');
        setIndex(1);
      } else {
        setMessage('Back button was clicked!');
        setIndex(0);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div>
      <h1>MyTest2</h1>
      {message && <p>{message}</p>}
      {index !== null && <p>Index: {index}</p>}
    </div>
  );
};

export default Home;
