import React from "react";
import Input from "./Input";
import { useAtom } from "jotai";
import { messageArrayAtom } from "../../atom";


const Messages = () => {
  const [messages, setMessages] = useAtom(messageArrayAtom);
  return (
    <div className="">
      <div className="chat chat-start p-4">
        
        <div className="chat-bubble bg-slate-400 text-white">{messages[1].text}</div>
      </div>
      <div className="chat chat-end p-4">
        <div className="chat-bubble chat-bubble-primary text-white">{messages[1].text}</div>
      </div>
      <div className="chat chat-start p-4">
        
        <div className="chat-bubble bg-slate-400 text-white">{messages[0].text}</div>
      </div>
      <div className="chat chat-end p-4">
        <div className="chat-bubble chat-bubble-primary text-white">{messages[2].text}</div>
      </div>
    </div>
  );
};

export default Messages;

