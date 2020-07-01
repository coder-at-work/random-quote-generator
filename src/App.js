import React, { useState, useEffect } from 'react';
import './App.css';
import QuoteGenerator from './QuoteGenerator';

const randomColorGenerator = digits => {
  let randomColor = '#';
  randomColor += Math.floor(Math.random() * 6);
  for (let i = 1; i < digits; i++) {
    randomColor += Math.floor(Math.random() * 16).toString(16);
  }
  return randomColor;
}


function App() {
  const apiURL = 'https://run.mocky.io/v3/086be80b-54d5-497f-a4f0-45675edb58eb';
  const [currentColor, setColor] = useState(randomColorGenerator(6));
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiURL).then(res => res.json()).then(data => {
      setData(data);
    }).catch(e => setError(e));
  }, []);

  const generateNewQuote = () => {
    setColor(randomColorGenerator(6));
  }
  return (
    <div className="App" style={{ backgroundColor: currentColor }}>
      {error && <h1>Error Occured in fetching results</h1>}
      {data.length > 0 && <QuoteGenerator quoteData={data[Math.floor(Math.random() * data.length)]} color={currentColor} newQuote={generateNewQuote} />}
    </div>
  );
}

export default App;
