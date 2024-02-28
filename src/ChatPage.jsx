import React from "react";
import Sidebar from "./components/Sidebar"
import Chat from "./components/Chat"
import Navbar from "./components/Navbar";
import Messages from "./components/Messages";
import TopOfChat from "./components/TopOfChat";


const ChatPage = () => {
    return (
        <div className="bg-blue-300 h-screen flex items-center justify-center">
            
                <div className="border border-white rounded-lg flex overflow-hidden">
                    <div className="flex-1 bg-gray-800">
                        {<Sidebar/>}
                    </div>
                    <div className="flex-2">
                        {<TopOfChat/>}
                        <div className="messages bg-gray-200 h-full">
                            {<Messages/>}
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default ChatPage;
