import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats' 
import TopProfileNav from '../TopProfileNav'

export const Sidebar = () => {
  return (
    <div className='sidebar bg-indigo'>
        
        <Navbar />
        <Search/>
        <Chats/>
        </div>
  );
};

export default Sidebar