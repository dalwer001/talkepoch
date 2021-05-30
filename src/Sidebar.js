import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import'./Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import  RateReviewOutlinedIcon  from '@material-ui/icons/RateReviewOutlined';
import SidebarChat from './SidebarChat';
import { selectUser } from './features/counter/userSlice';
import { useSelector } from 'react-redux';
import db,{ auth } from './firebase';

const Sidebar = () => {
    const user =useSelector(selectUser);
    const [chats, setChats] = useState([])

    useEffect(() => {
        db.collection("chats").onSnapshot((snapshot)=>
        setChats(
            snapshot.docs.map((doc) => ({
                id:doc.id,
                data:doc.data(),
            }))
        ))

    },[]);



    const addChat = () =>{
        const chatName = prompt("please Enter a Chat name");

        if(chatName){
        db.collection('chats').add({
            chatName: chatName,
        });
    }
    };
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar onClick={() => auth.signOut()} src={user.photo}className="sidebar_avatar"></Avatar>
                <div className="sidebar_input">
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>
                </div>
                <IconButton variant="outlined" className="sidebar_inputbutton">
                <RateReviewOutlinedIcon className="text-white" onClick={addChat}></RateReviewOutlinedIcon>
                </IconButton>

            </div>
            <div className="sidebar_chats">
                {chats.map(({ id, data: {chatName }}) => (
            <SidebarChat  key={id} id={id} chatName={chatName}/>

                ))}

            </div>
        </div>
    );
};

export default Sidebar;
