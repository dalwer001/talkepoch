import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import'./Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import  RateReviewOutlinedIcon  from '@material-ui/icons/RateReviewOutlined';
import ChatSidebar from './ChatSidebar';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar className="sidebar_avatar"></Avatar>
                <div className="sidebar_input">
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>
                </div>
                <IconButton variant="outlined" className="sidebar_inputbutton">
                <RateReviewOutlinedIcon></RateReviewOutlinedIcon>
                </IconButton>
            </div>
            <div className="sidebar_chats">
                <ChatSidebar></ChatSidebar>
                <ChatSidebar></ChatSidebar>
                <ChatSidebar></ChatSidebar>
            </div>
        </div>
    );
};

export default Sidebar;