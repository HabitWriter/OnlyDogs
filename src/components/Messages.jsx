import React from 'react';
import Message from './Message';
import Input from './Input';

const Messages = () => {
  return (
    <div className='messages bg-indigo-700  h-full" style="height: calc(100% - 160px) p-8 flex flex-col'> 
      <div className="chat chat-start">
        <div className="chat-bubble">It's over Anakin, <br/>I have the high ground.</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">You underestimate my power!</div>
      </div>
      <div className="flex-grow"> 
        <Input />
      </div>
    </div>
  );
};

export default Messages;
