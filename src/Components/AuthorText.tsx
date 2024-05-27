interface Props {
    author: string;
}
function AuthorText({author}: Props) {
    return (
        <div id="author">
            - {author}
        </div>
    );
}

export default AuthorText;