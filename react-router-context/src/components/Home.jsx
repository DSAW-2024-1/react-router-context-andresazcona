
import React from 'react';
import { useAuth } from './AuthContext';

const HomePage = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Welcome, {user.email}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default HomePage;
