import React from 'react';
import '../styles/Sidebar.css';

function Sidebar({ isVisible, onPageChange }) {
  return (
    <div className={`sidebar ${isVisible ? '' : 'hidden'}`}>
      <div className="logo">Logo</div>
      <br />
      <br />
      <br />
      <ul>
        <li onClick={() => onPageChange('dashboard')}>Dashboard</li>
        <li onClick={() => onPageChange('support')}>Suporte</li>
      </ul>
    </div>
  );
}

export default Sidebar;