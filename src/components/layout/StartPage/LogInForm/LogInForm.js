import React from 'react';
import styles from '../Form.module.scss';

const LogInForm = () => {
    return ( 
        <>
            <form>
                <div className={styles.formGroup}>
                    <label htmlFor="email">e-mail address</label>
                    <input id="email" type="email"/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">password</label>
                    <input id="password" type="password"/>
                </div>
            </form>
            <button>Log in</button>
        </>
    );
}
 
export default LogInForm;