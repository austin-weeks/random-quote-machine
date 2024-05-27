import { useEffect, useState } from "react";

interface Props {
    quote: string;
    delay?: number;
}

function TypeWriter({quote, delay = 7}: Props) {
    const [text, setText] = useState("");
    const [strIndex, setStrIndex] = useState(0);

    useEffect(() => {
        if (strIndex < quote.length) {
            const timeout = setTimeout(() => {
                setText(prev => prev + quote[strIndex]);
                setStrIndex(prev => prev + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [strIndex]);
    useEffect(() => {
        setText("");
        setStrIndex(0);
    }, [quote]);

    return (
        <span>{text}</span>
    );
}

export default TypeWriter;