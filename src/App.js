import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import StartPage from './components/layout/StartPage/StartPage';

function App() {
  const [userIsAuthorized, setUserIsAuthorized] = useState(false);
  return (
    <div className="app">
      {
        userIsAuthorized ? (
          <div className="container">
            <Navbar />
            <Dashboard />
          </div>   
        ) : (
          <StartPage />
        )
      }
    </div>
  );
}

export default App;
