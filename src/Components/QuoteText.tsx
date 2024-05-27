import { Quotes } from "@phosphor-icons/react";
import TypeWriter from "./TypeWriter";

interface Props {
    quote: string;
}

function QuoteText ({quote}: Props) {
    return (
        <div className="text">
            <Quotes size={46} color="white" weight="bold" className="quote-icon" />
            <span id="text"><TypeWriter quote={quote} /></span>
        </div>
    );
}

export default QuoteText;