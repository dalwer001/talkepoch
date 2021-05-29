import { Avatar } from '@material-ui/core';
import React from 'react';
import'./ChatSidebar.css'

const ChatSidebar = () => {
    return (
        <div className="sidebarChat">
            <Avatar></Avatar>
            <div className="sidebarChat_info">
                <h3>Name</h3>
                <p>Last message seen</p>
                <small>timestamp</small>
            </div>
            
        </div>
    );
};

export default ChatSidebar;