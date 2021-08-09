import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>There is nothing here.</h1>
      <p>
        Ok so i havent actually put anything here but i will eventually (probably). I do have a 
                <a href="https://www.shop.resailed.com/" rel="noopener"> threadless shop</a> so check it out.
      </p>
      <br/>
      <h2>Here is the date in case u forgot:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default App;
