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

    window.addEventListener('beforeunload', () => {
      setMessage('beforeunload  is working! BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB beforeunload');
      setIndex(1);
    });

  }, []);

  const load = index;
  const displayMessage = message;
  return (
    <div>
      <h1>MyTest2</h1>
      <p>{displayMessage}</p>
      {load !== null && <p>Index: {load}</p>}
      <h2>MyTest2 end</h2>

    </div>
  );
};

export default Home;
