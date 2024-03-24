import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats' 
import TopProfileNav from '../TopProfileNav'

export const Sidebar = () => {
  return (
    <div className='sidebar bg-indigo h-screen'>
        
        
        <Search/>
        <Chats/>
        </div>
  );
};

export default Sidebar