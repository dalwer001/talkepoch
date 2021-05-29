import { IconButton } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import React, { useState } from 'react';
import './Talk.css';

const Talk = () => {
    const [input, setInput] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();
        setInput("");
    }
    return (
        <div className="chat">
            {/* chat header */}
            <div className="chat_header">
                <h4>To:<span className="chat_name">Channel Name</span></h4>
                <strong>Details</strong>
            </div>
            {/* chat message */}
            <div className="chat_message">
                <h1>No message</h1>
            </div>
            {/* chat input */}
            <div className="chat_input">
                <form action="">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Message"
                        type="text"
                    />
                    <button onClick={sendMessage}>Send Message</button>
                </form>
                <IconButton>
                    <MicNoneIcon className="chat_mic"></MicNoneIcon>
                </IconButton>
            </div>
        </div>
    );
};

export default Talk;