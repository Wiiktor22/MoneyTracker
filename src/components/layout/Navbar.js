import React from 'react';
import styles from './Navbar.module.scss';
import Footer from './Footer/Footer';
import { connect } from 'react-redux';
import { signOut } from './../../store/actions/authActions';

const Navbar = ({ signOut }) => {
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
                <button className={styles.button} onClick={signOut}>Log out</button>
                <Footer />
            </div>
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}
 
export default connect(null, mapDispatchToProps)(Navbar);