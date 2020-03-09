import React from 'react';
import styles from './Navbar.module.scss';
import Footer from './Footer/Footer';

const Navbar = () => {
    return ( 
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.logo}>Money <span className={styles.orange}> Tracker</span></h1>
                <nav className={styles.nav}>
                    <ul>
                        <li>Dashboard</li>
                        <li>Profile</li>
                    </ul>
                </nav>
                <button className={styles.button}>Log out</button>
                <Footer />
            </div>
        </>
    );
}
 
export default Navbar;