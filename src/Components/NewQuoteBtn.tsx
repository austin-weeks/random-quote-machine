interface Props {
    onClick: () => void
}

function NewQuoteBtn({onClick}: Props) {
    return (
        <button id="new-quote" onClick={onClick}>New Quote</button>
    );
}

export default NewQuoteBtn;