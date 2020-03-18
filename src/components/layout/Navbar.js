import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import Footer from './Footer/Footer';
import { connect } from 'react-redux';
import { signOut } from './../../store/actions/authActions';
import { Link } from 'react-router-dom';

const Navbar = ({ signOut }) => {
    const [showMenu, setShowMenu] = useState(false);
    const handleClick = () => {
        setShowMenu(!showMenu);
    }
    return ( 
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.logo}>Money <span className={styles.orange}> Tracker</span></h1>
                <div className={styles.burger} onClick={handleClick}>
                    <div className={styles.bar1}></div>
                    <div className={styles.bar2}></div>
                    <div className={styles.bar3}></div>
                </div>
                {showMenu && (
                    <div className={styles.mobileNav}>
                        <Link to='/'><div>Dashboard</div></Link>
                        <Link to='/profile'><div>Profile</div></Link>
                        <div className={styles.strong}onClick={signOut}>Log out</div>
                    </div>
                )}
                <nav className={styles.nav}>
                    <ul>
                        <Link to='/'><li>Dashboard</li></Link>
                        <Link to='/profile'><li>Profile</li></Link>
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