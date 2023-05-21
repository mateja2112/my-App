import { useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import { Message } from "../components/Message";
import { MessageForm } from "../components/MessageForm";
import { AppContext } from "../contexts/AppContext";
import { Navigate } from "react-router-dom";
import "../styles/ChatPage.css";

export function ChatPage(){
    
    const [messages, setMessages]=useState([]);
    const [client, setClient ]= useState(null);
    const [chatRoom, setChatRoom] = useState(null);
    const [ ready, setReady] = useState(false);
    const context = useContext(AppContext);

    const handleSubmit = useCallback((message) => {
        client.publish({
            room: 'algebra',
            message: {
                ...message,
                time: Date.now(),
                authorId: context.id,
            }
        });
    }, [client, context])

    function handleSignOut() {
        context.setUsername('');
    }

    const messageComponents = messages.map((message) => {
        return <Message 
            key={message.id}
            avatarIndex={message.author.avatarIndex}
            author={message.author.username} 
            text={message.text}
            time={message.time}
            authorId={message.authorId}
        />;
    });
    useEffect (() => {
        const drone = new window.Scaledrone('HARZqemwKDjVRtr3');
       
        drone.on('open', (error)=>{
            if (error) {
                 console.log(error);
            } else {
                const room = drone.subscribe('algebra');
                setClient(drone);
                setChatRoom(room);

            }
        
        });

    },[]);

    useEffect(()=>{
        if (chatRoom !== null && !ready){
            chatRoom.on('data', (data) => {
                setMessages((messages)=>{
                    return[...messages, data];
                });
            });
            setReady(true);
        }
    }, [chatRoom, ready]);


    if (!context.isSignedIn) {
           return <Navigate to="/" replace/>;
    }


    return(
        <div className="main-box">
            <button type="button" className="chat-button" onClick={handleSignOut}>Sign out</button>
            <div className="message-list">
                {messageComponents}                         
            </div>
            {client === null && <div>Please wait...</div>}
            {client !== null && <MessageForm onSubmit={handleSubmit} 
                    username={context.username} 
                    avatarIndex={context.avatarIndex} />
            }
       </div>
    );
};