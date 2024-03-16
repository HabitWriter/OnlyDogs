import React from 'react';

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex flex-grow justify-between items-center">
      <div className="flex">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Avatar" />
          </div>
        </div>
      </div>
      <div className="flex">
        <a className="btn btn-ghost text-xl">Your Dawgz</a>
      </div>
    </div>
  );
};

export default Navbar;
