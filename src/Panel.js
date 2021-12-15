import React from "react";

export default function Panel({ symbol, quote } ) {
    return (
        <div>
            <div id="symbol">{symbol}</div>
            <div id="quote">
                {
                    quote ? quote.latestPrice : 'Loading...'
                }
            </div>
        </div>
    );
}