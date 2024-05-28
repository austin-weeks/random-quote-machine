import { TwitterLogo } from "@phosphor-icons/react";
import { Quote } from "./QuoteBox";

interface Props {
    quote: Quote;
}

const baseTweetURL = "https://twitter.com/intent/tweet?url=austin-weeks.github.io&text="

function TweetBtn({quote}: Props) {

    return (
        <a href={`${baseTweetURL}"${quote.quote}" - ${quote.author}`} target="_blank" id="tweet-quote">
            <button>
                <TwitterLogo size={24} weight="bold" />
            </button>
        </a>
    );
}

export default TweetBtn;