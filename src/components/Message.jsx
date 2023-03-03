export function Message(props){
    return(
    <div className="message">
        <div className="message-author">{props.author}</div>
        <div className="message-text">{props.text}</div>
    </div>
    );
};
