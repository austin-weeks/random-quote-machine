import { useState } from "react";
import AuthorText from "./AuthorText";
import NewQuoteBtn from "./NewQuoteBtn";
import QuoteText from "./QuoteText";
import TweetBtn from "./TweetBtn";

import quotesImport from "./import-quotes"

const quotes: Quote[] = quotesImport;

export interface Quote {
    quote: string;
    author: string;
}

function getRandomQuote(): Quote {
    return quotes[Math.round(Math.random() * quotes.length)];
}

function QuoteBox () {
    const [curQuote, setCurQuote] = useState(getRandomQuote);

    function handleNewQuote() {
        setCurQuote(getRandomQuote());
    }

    return (
        <div id="quote-box">
            <QuoteText quote={curQuote.quote} />
            <AuthorText author={curQuote.author} />
            <div id="buttons">
                <NewQuoteBtn onClick={handleNewQuote} />
                <TweetBtn quote={curQuote}/>
            </div>
        </div>
    );
}

export default QuoteBox;