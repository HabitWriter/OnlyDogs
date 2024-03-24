import React from "react";
import BottomNav from "../components/BottomNav";
import TopLogoNav from "../components/TopLogoNav";
import XButton from "../components/buttons/XButton";
import UploadImageButton from "../components/buttons/UploadImageButton";
import { useAtom } from "jotai";
import { messageArrayAtom } from "../atom";
import Messages from "../components/chatComponents/Messages";
import Sidebar from "../components/chatComponents/Sidebar";

const RecentMessagesPage = () => {
  const [messages, setMessages] = useAtom(messageArrayAtom);
  
  return (
    <div className="min-h-screen flex flex-col">
      <TopLogoNav/>
      <div className="flex-grow flex">
        
        <div className="flex-grow flex bg-gray-200">
          <div className="p-4 flex-grow">
            <h2 className="text-xl font-bold mb-2"></h2>
            <Sidebar/>
          </div>
          <BottomNav selected={4} />
        </div>
      </div>
    </div>
  );
};

export default RecentMessagesPage;





