import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
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
  const navigate = useNavigate(); // Use useNavigate for navigation
  
  const navigateToChatsPage = () => {
    navigate("/chats"); // Use navigate to navigate to the Chats page
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <TopLogoNav />
      <div className="flex-grow flex justify-center items-center">
        <div className="w-full max-w-screen-xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            <div className="flex items-center p-4 border-b border-gray-200">
              {/* Replace anchor tag with onClick handler */}
              <button type="button" onClick={navigateToChatsPage} class="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 mr-8">
                <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
              </button>
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









