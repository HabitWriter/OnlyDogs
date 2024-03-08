import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export const TopOfChat = () => {
  return (
    <div className="navbar  bg-slate-200">
      <div className="navbar-start">
        
        
      </div>
      <div className="navbar-center">
     
        <Link to="/feed" className="btn btn-ghost text-xl w-56 justify-start">OnlyDogs</Link>
        
      </div>
      <div>
      <button className="btn btn-square w-40 btn-ghost justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
    </div>
    </div>
  );
};

export default TopOfChat;


