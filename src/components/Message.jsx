import { useContext } from "react";
import { avatarImages } from "../library/avatar";
import { AppContext } from "../contexts/AppContext";

export function Message(props){
    const context = useContext(AppContext);

    let className = "message";

    if (context.id === props.authorId) {
        className += " message-left";
    } else {
        className += " message-right";
    }

    return(
    <div className={className}>
        <img src={avatarImages[props.avatarIndex]} alt={props.author} width="100" height="100"/>
        <div className="message-author">{props.author}</div>
        <div className="message-text">{props.text}</div>
        <div>{new Date(props.time).toUTCString()}</div>
    </div>
    );
};
