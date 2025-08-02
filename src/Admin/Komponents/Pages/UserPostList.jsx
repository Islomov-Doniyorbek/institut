import React, { useState } from 'react';
import { MdNewspaper } from 'react-icons/md';
import { FaPencilAlt, FaRegClock, FaTrashAlt } from 'react-icons/fa';
import { Modal, Input } from 'antd';
import UserOwnNews from './UserPostListInner/UserOwnNews';
import UserOwnAnnouncement from './UserPostListInner/UserOwnAnnouncement';
import UserOwnEvents from './UserPostListInner/UserOwnEvents';
import UserOwnDocument from './UserPostListInner/UserOwnDocument';
import UserOwnMedia from './UserPostListInner/UserOwnMedia';
import UserOwnStudent from './UserPostListInner/UserOwnStudent';


const UserPostList = () => {
  const [activeSection, setActiveSection] = useState('Media'); 

  return (
    <div className='userpost'>
      <h1>Sizning shaxsiy postlaringiz</h1>

      <div className='userownmenu'>
        <button onClick={() => setActiveSection('Yangiliklar')}>Yangiliklar</button>
        <button onClick={() => setActiveSection('Tadbirlar')}>Tadbirlar</button>
        <button onClick={() => setActiveSection('E\'lonlar')}>E'lonlar</button>
        <button onClick={() => setActiveSection('Hujjatlar')}>Hujatlar</button>
        <button onClick={() => setActiveSection('Media')}>Media</button>
        <button onClick={() => setActiveSection('Talabalar')}>Talabalar</button>
      </div>

      <div className='userownbox'>
        {activeSection === 'Yangiliklar' && <UserOwnNews />}
        {activeSection === 'Tadbirlar' && <UserOwnEvents />}
        {activeSection === 'E\'lonlar' && <UserOwnAnnouncement />}
        {activeSection === 'Hujjatlar' && <UserOwnDocument />}
        {activeSection === 'Media' && <UserOwnMedia />}
        {activeSection === 'Talabalar' && <UserOwnStudent />}
      </div>
    </div>
  );
};

export default UserPostList;