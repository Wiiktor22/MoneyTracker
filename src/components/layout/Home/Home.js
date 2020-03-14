import React from 'react';
import Navbar from '../Navbar';
import Dashboard from '../../dashboard/Dashboard';
import styles from './Home.module.scss';

const Home = () => {
    return ( 
        <div className={styles.main}>
            <Navbar />
            <Dashboard />
        </div>
    );
}

export default Home;