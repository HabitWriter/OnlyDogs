import React from "react";

export const Chats = () => {
  return (
    <div className="chats">
      <div className="p-2 flex items-center text-white gap-2 cursor-pointer hover:bg-indigo-950">
        <img className="w-12 h-10 rounded-full object-cover" src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" />
        <div className="userChatInfo">
          <span className="">Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="p-2 flex items-center text-white gap-2 cursor-pointer hover:bg-indigo-950">
        <img className="w-12 h-10 rounded-full object-cover" src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" />
        <div className="userChatInfo">
          <span className="">Henry</span>
          <p>Howdy!</p>
        </div>
      </div>
      <div className="p-2 flex items-center text-white gap-2 cursor-pointer hover:bg-indigo-950">
        <img className="w-12 h-10 rounded-full object-cover" src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" />
        <div className="userChatInfo">
          <span className="">Paul</span>
          <p>Woof Woof!</p>
        </div>
      </div>
      
    </div>
  );
};

export default Chats;

