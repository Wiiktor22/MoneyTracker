import React from 'react';
import styles from './LoadingPage.module.scss';

const LoadingPage = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.skChase}>
                <div className={styles.skChaseDot}></div>
                <div className={styles.skChaseDot}></div>
                <div className={styles.skChaseDot}></div>
                <div className={styles.skChaseDot}></div>
                <div className={styles.skChaseDot}></div>
                <div className={styles.skChaseDot}></div>
            </div>
        </div>
    );
}
 
export default LoadingPage;