import React, { useEffect } from 'react';
import styles from './ChartPanel.module.scss';
import { connect } from 'react-redux';
import Chart from 'react-apexcharts';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const ChartPanel = ({ array, isLoaded, isEmpty, id }) => {
    return ( 
        <div className={styles.wrapper}>
            Miejsce na wykres
        </div>
    );
}

export default ChartPanel