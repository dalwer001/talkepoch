import React from 'react';
import Chat from './Chat';
import'./TalkMessage.css';
import Sidebar from './Sidebar';

const TalkMessage = () => {
    return (
        <div className="TalkMessage row m-0">
            <div className="col-sm-12 col-md-4 p-0 ">
                <Sidebar></Sidebar>
            </div>
            <div className="col-sm-12 col-md-8 p-0">
                <Chat></Chat>
            </div>
        </div>
    );
};

export default TalkMessage;