import { useState } from "react";
import AuthorText from "./AuthorText";
import NewQuoteBtn from "./NewQuoteBtn";
import QuoteText from "./QuoteText";
import TweetBtn from "./TweetBtn";

export interface Quote {
    quote: string;
    author: string;
}

const quotesURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

async function loadQuotes() {
    const response = await fetch(quotesURL);
    const json = await response.json();
    const quotes: Quote[] = json["quotes"];
    return quotes;
}

const quotes: Quote[] = await loadQuotes();

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