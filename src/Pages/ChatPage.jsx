import React from "react";
import BottomNav from "../components/BottomNav";
import TopLogoNav from "../components/TopLogoNav";
import CreateNewPost from "../components/CreateNewPost";
import Post from "../components/Post";
import XButton from "../components/buttons/XButton";
import UploadImageButton from "../components/buttons/UploadImageButton";
import { useAtom } from "jotai";
import { messageArrayAtom } from "../atom";
import Messages from "../components/chatComponents/Messages";

const ChatPage = () => {
  const [messages, setMessages] = useAtom(messageArrayAtom);
  
  return (
    <div className="min-h-screen flex flex-col">
      <TopLogoNav />
      <div className="flex-grow flex justify-center items-center">
        <div className="w-full max-w-screen-xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            <div className="flex items-center p-4 border-b border-gray-200">
              <img
                className="h-12 w-12 mr-4 my-2 rounded-full object-cover"
                src="src\components\Dog\dog1.jpg"
                alt=""
              />
              <h2 className="card-title">Chewbarka</h2>
            </div>
            <div className="flex-grow p-4 overflow-y-auto">
              <Messages />
            </div>
            <div className="flex items-center justify-between p-4 border-t border-gray-200">
              <textarea className="w-full border rounded-md p-2" placeholder="Say something..." />
              <div className="flex items-center">
                <UploadImageButton />
                <button className="w-24 ml-2 btn btn-primary">Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav selected={4} />
    </div>
  );
};

export default ChatPage;






