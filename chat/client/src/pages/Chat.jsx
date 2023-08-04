import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import LogoSearch from "../components/logoSearch/LogoSearch";
import { useSelector } from "react-redux";
import { userChats } from "../api/ChatRequest";
import Conversation from "../components/Conversation/Conversation";
import ChatBox from "../components/ChatBox/ChatBox";
import { io } from "socket.io-client";

const Chat = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  // console.log(user);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);

  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
      // console.log(onlineUsers);
    });
  }, [user]);

  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      setReceivedMessage(data);
    });
  }, []);

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
        //console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user._id]);

  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

  return (
    <>
      <div className="Chat">
        <div className="Left-side-chat">
          <LogoSearch />
          <div className="Chat-container">
            <h2>Chats</h2>
            <div className="Chat-list">
              {chats.map((chat) => {
                return (
                  <div key={chat._id} onClick={() => setCurrentChat(chat)}>
                    <Conversation
                      data={chat}
                      currentUser={user._id}
                      online={checkOnlineStatus(chat)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="Right-side-chat">
          <div style={{ width: "20rem", alignSelf: "flex-end" }}></div>
          <ChatBox
            chat={currentChat}
            currentUser={user._id}
            setSendMessage={setSendMessage}
            receivedMessage={receivedMessage}
          />
        </div>
      </div>
    </>
  );
};

export default Chat;
