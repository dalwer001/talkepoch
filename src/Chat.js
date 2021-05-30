import { IconButton } from '@material-ui/core';
import  MicNoneIcon  from '@material-ui/icons/MicNone';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import'./Chat.css';
import db from './firebase';
import { selectChatId, selectChatName } from './features/counter/chatSlice';
import Message from './Message';
import firebase from 'firebase';
import { selectUser } from './features/counter/userSlice';
import FlipMove from 'react-flip-move';

const Chat = () => {
    const[input,setInput] = useState("");
    const chatName=useSelector(selectChatName);
    const chatId=useSelector(selectChatId);
    const user=useSelector(selectUser)
    const [messages, setMessages]=useState([]);

    useEffect(()=>{
        if(chatId){
            db.collection('chats')
            .doc(chatId)
            .collection("messages")
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot)=>
                setMessages(
                    snapshot.docs.map((doc) =>({
                    id:doc.id ,
                    data:doc.data(),
                })) 
                )
            );
        }

    },[chatId])

    const sendMessage= (e)=>{
        e.preventDefault();
        db.collection("chats").doc(chatId).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp() || null,
            message:input,
            uid:user.uid,
            photo:user.photo,
            email:user.email,
            displayName:user.displayName,
        });
        setInput("");
    };
    return (
        <div className="chat">
            {/* chat header */}
            <div className="chat_header text-white">
                <h4>To:<span className="chat_name">{chatName}</span></h4>
                <strong>Details</strong>
            </div>
            {/* chat message */}
                <div className="chat_message">
                    <FlipMove>
                    {messages.map(({id, data})=>(
                        <Message key={id} contents={data}></Message>
                    ))}
                    </FlipMove>
                </div>
            {/* chat input */}
            <div className="chat_input">
                <form action="">
                    <input 
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    placeholder="Message"
                     type="text" 
                     />
                    <button onClick={sendMessage}>Send Message</button>
                </form>
                <IconButton>
                    <MicNoneIcon className="chat_mic text-white"></MicNoneIcon>
                </IconButton>
                
            </div>
        </div>
    );
};

export default Chat;