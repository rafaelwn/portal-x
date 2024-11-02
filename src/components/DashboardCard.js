import React, { useEffect } from 'react';
import '../styles/DashboardCard.css';
import { useUser } from '../contexts/UserContext';

function DashboardCard({ title, value, trend }) {
  const { updateUser } = useUser()

  useEffect(() => {
    updateUser({ option: 'Dashboard' });
  }, [updateUser]);

  return (
    <div className="dashboard-card">
      <br />
      <div className="title">{title}</div>
      <div className="value">{value}</div>
      <div className="trend">{trend}</div>
    </div>
  );
}

export default DashboardCard;