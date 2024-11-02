import React  from 'react';
import '../styles/Header.css';
import { useUser } from '../contexts/UserContext';

function Header({ toggleSidebar }) {
  const { user } = useUser()
  return (
    <div className="header">
      <button className="toggle-button" onClick={toggleSidebar}>
        ☰
      </button>
      <h1>Portal X - {user.option}</h1>
      <div className="user-menu">
        <span>Settings</span>
        <span>Notifications</span>
      </div>
    </div>
  );
}

export default Header;