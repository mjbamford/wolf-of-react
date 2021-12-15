import React, { useState, useEffect } from 'react';
import './App.css';
import Heading from "./Heading";
import InfoBox from "./Panel";
import Form from "./Form"; 

function App() {
  const [symbol, setSymbol] = useState('TSLA');
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    loadQuoteForStock(symbol).then(json => setQuote(json))
  }, [symbol]);

  function handleSubmit(symbol) {
    setSymbol(symbol)
  }

  return (
    <div className="App">
      <main className="App-header">
        <Heading />
        <Form onSubmit={handleSubmit} />
        <InfoBox symbol={symbol} quote={quote} />
      </main>
    </div>
  );
}

function loadQuoteForStock(symbol) {
  const token = 'pk_8b63ed6c9d284f608b70464cf98a556f';
  const url = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${token}`;

  if (symbol) {
    return fetch(url)
      .then(resp => resp.json())
      .then(json => { console.dir(json); return json })
  } else {
    return Promise.resolve(null);
  }
}


export default App;
