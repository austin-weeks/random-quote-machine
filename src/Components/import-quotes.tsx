import { Quote } from "./QuoteBox";
const quotesURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

async function loadQuotes() {
    const response = await fetch(quotesURL);
    const json = await response.json();
    const quotes: Quote[] = json["quotes"];
    return quotes;
}

export default await loadQuotes();
