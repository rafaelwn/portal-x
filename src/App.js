import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardCard from './components/DashboardCard';
import TrafficChart from './components/TrafficChart';
import SupportForm from './components/SupportForm';
import { UserProvider } from './contexts/UserContext';

import './App.css';

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'support':
        return (
          <>
            <br />
            <br />
            <br />
            <br />
            <SupportForm />
          </>
        );
      default:
        return (
          <>
            <br />
            <br />
            <br />
            <br />
            <div className="cards">
              <DashboardCard title="Users" value="26K" trend="-12.4%" />
              <DashboardCard title="Income" value="$6,200" trend="+40.9%" />
              <DashboardCard title="Conversion Rate" value="2.49%" trend="+84.7%" />
              <DashboardCard title="Sessions" value="44K" trend="-23.6%" />
            </div>
            <TrafficChart />
          </>
        );
    }
  };

  return (
    <UserProvider>
    <div className={`app ${isSidebarVisible ? '' : 'sidebar-hidden'}`}>
      <Sidebar isVisible={isSidebarVisible} onPageChange={setCurrentPage} />
      <div className={`main-content ${isSidebarVisible ? '' : 'expanded'}`}>
        <Header toggleSidebar={toggleSidebar} />
        <div className="content">
          {renderContent()}
        </div>
      </div>
    </div>
    </UserProvider>
  );
}

export default App;