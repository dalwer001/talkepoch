import React from 'react';
import Talk from'./Talk';
import'./TalkMessage.css';
import Sidebar from './Sidebar';

const TalkMessage = () => {
    return (
        <div className="talkMessage">
            <Sidebar></Sidebar>
            <Talk></Talk>
            
        </div>
    );
};

export default TalkMessage;