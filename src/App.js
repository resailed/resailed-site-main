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
        Ok so i havent actually put anything here but i will eventually (probably). I do have a <a href="https://shop.resailed.com/" rel="noopener">threadless shop</a> so check it out.
      </p>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-1oRezdQEzM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br/>
      <h2>Here is the date in case u forgot:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default App;
