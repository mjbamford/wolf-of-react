import React, { useState } from 'react';

function Form({ onSubmit }) {
    const [symbol, setSymbol] = useState('');

    function handleChange(event) {
        const value = event.target.value;
        const symbol = value.trim().toUpperCase();
        setSymbol(symbol);
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(symbol);
    }

    return (
        <form>
            <input name="symbol" value={symbol} onChange={handleChange}/>
            <input type="submit" value="Load Quote" onClick={handleSubmit}/>
        </form>
    );
}

export default Form;