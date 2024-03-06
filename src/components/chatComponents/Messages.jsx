import React from 'react';
import Input from './Input';
import { useAtom } from 'jotai';
import { messageArrayAtom } from '../../atom';

const Messages = () => {
  const [messages, setMessages] = useAtom(messageArrayAtom)
  return (
    <div className='messages w-[450px] relative bg-indigo-700 h-full flex flex-col '>
      <div className="chat chat-start p-4">
        <div className="chat-bubble"> {messages[1].text}</div>
      </div>
      <div className="chat chat-end p-4">
        <div className="chat-bubble">{messages[1].text}</div>
      </div>
      <div className="absolute bottom-16 p-4">
        <Input />
      </div>
    </div>
  );
}

export default Messages;


