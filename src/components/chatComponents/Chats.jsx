import React from "react";

// Card component
const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 hover:bg-indigo-950">
      {children}
    </div>
  );
};

export const Chats = () => {
  return (
    <div className="chats flex-grow h-screen">
      <Card>
        <div className="p-2 flex items-center text-black gap-2 cursor-pointer">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="User"
          />
          <div className="userChatInfo">
            <span className="text-lg text-black">Jane</span>
            <p className="text-lg text-black">Hello</p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-2 flex items-center text-black gap-2 cursor-pointer">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="User"
          />
          <div className="userChatInfo">
            <span className="text-lg text-black">Henry</span>
            <p className="text-lg text-black">Howdy!</p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-2 flex items-center text-black gap-2 cursor-pointer">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="User"
          />
          <div className="userChatInfo">
            <span className="text-lg text-black">Paul</span>
            <p className="text-lg text-black">Woof Woof!</p>
          </div>
        </div>
      </Card>
      <Card>
        <div className="p-2 flex items-center text-black gap-2 cursor-pointer">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="User"
          />
          <div className="userChatInfo">
            <span className="text-lg text-black">John</span>
            <p className="text-lg text-black">Barks and Woof!</p>
          </div>
        </div>
      </Card>
      
    </div>
  );
};

export default Chats;







