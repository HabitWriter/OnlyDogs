import React, { useState } from "react";
import Sidebar from "../components/chatComponents/Sidebar";
import Chat from "../components/chatComponents/Chat";
import Navbar from "../components/Navbar";
import Messages from "../components/chatComponents/Messages";
import TopOfChat from "../components/TopOfChat";
import axios from "axios";
import { get } from "lodash";
import BottomNav from "../components/BottomNav";

const ChatPage = () => {
  
    


     
  return (
    <div className="bg-blue-300 h-screen flex items-center justify-center">
      <div className="border h-3/5 border-white rounded-lg flex overflow-hidden">
        <div className="flex-1 bg-gray-800">{<Sidebar />}</div>
        <div className="flex-2">
          {<TopOfChat />}
          <div className="messages bg-gray-200 h-full">{<Messages />}</div>
        </div>
        <div className="flex-1 bg-gray-800">{<BottomNav/>}</div>
      </div>
    </div>
  );
};

export default ChatPage;
