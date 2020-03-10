import React from 'react';
import Navbar from '../Navbar';
import Dashboard from '../../dashboard/Dashboard';

const Home = () => {
    return ( 
        <div style={{ marginLeft: 240}}>
            <Navbar />
            <Dashboard />
        </div>
    );
}

export default Home;