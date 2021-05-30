import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './SidebarChat.css'
import { setChat } from "./features/counter/chatSlice";
import db from './firebase';
import * as timeago from 'timeago.js';


function SidebarChat({ id, chatName }) {
    const dispatch = useDispatch();
    const [chatInfo, setChatInfo] = useState([]);

    useEffect(() => {
        db.collection("chats")
            .doc(id)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setChatInfo(snapshot.docs.map((doc) => doc.data()))
            );
    }, [id]);
    return (
        <div
            onClick={() =>
                dispatch(
                    setChat({
                        chatId: id,
                        chatName: chatName,
                    })
                )
            }
            className="sidebarChat">
            <Avatar src={chatInfo[0]?.photo}></Avatar>
            <div className="sidebarChat_info">
                <h3>{chatName}</h3>
                <p>{chatInfo[0]?.message}</p>
                <small>
                    {timeago.format(new Date(chatInfo[0]?.timestamp?.toDate()))}
                </small>
            </div>

        </div>
    );
};

export default SidebarChat;