import React from 'react';
import moment from 'moment';
import styles from './Footer.module.scss';

const Footer = () => {
    return ( 
        <div className={styles.footer}>
            <p>{moment().format('Do MMMM YYYY')}</p>
            <p className={styles.author}>Wiktor Szlegier © {moment().format('YYYY')}</p>
        </div>
    );
}
 
export default Footer;