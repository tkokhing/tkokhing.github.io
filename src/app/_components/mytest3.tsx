'use client';

import { useEffect, useState } from 'react';

const Home = () => {
  const [message, setMessage] = useState('');
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    // const handlePopState = (event: PopStateEvent) => {
    //   if (event.state) {
    //     setMessage('Forward button was clicked!');
    //     setIndex(1);
    //   } else {
    //     setMessage('Back button was clicked!');
    //     setIndex(0);
    //   }
    // };

    window.addEventListener('popstate', () => {
      setMessage('popstate popstate popstate ____________________________popstate working________________popstate working________________!');
      setIndex(1);
    });

  }, []);

  const load = index;
  const displayMessage = message;
  return (
    <div>
      <h1>MyTest3</h1>
      <p>{displayMessage}</p>
      {load !== null && <p>Index: {load}</p>}
      <h2>MyTest3 end</h2>

    </div>
  );
};

export default Home;
