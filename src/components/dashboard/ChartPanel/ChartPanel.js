import React from 'react';
import styles from './ChartPanel.module.scss';
import { connect } from 'react-redux';
import Chart from 'react-apexcharts';

const ChartPanel = ({ array, isLoaded }) => {
    let expenses = [];
    if (isLoaded) {
        expenses = array.filter(item => item.type === 'expense');
    }
    const labels = ['Car & Transport','Fees/Bills','Food & Drinks','Home','Health & Hygiene', 'Entertaiment', 'Education', 'Personal', 'Shopping', 'Kids', 'Flights/Travels', 'Other'];
    const options = {
        labels,
    };

    const getSumArray = () => {
        let sum = [0,0,0,0,0,0,0,0,0,0,0,0];
        labels.map((label, labelIndex) => {
            expenses.map((expense) => {
                if (expense.categories === label) {
                    sum[labelIndex] += parseFloat(expense.amount)
                }
            })
        })
        let newSum = sum.map(item => item = Math.floor(item))
        return newSum;
    }

    let preparedArray = [];
    if (isLoaded) {
        preparedArray = getSumArray();
    }

    return ( 
        <div className={styles.wrapper}>
            {isLoaded && <Chart options={options} series={preparedArray} type="donut" width="460" />}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        array: state.firebase.profile.transactions,
        isLoaded: state.firebase.profile.isLoaded
    }
}
 
export default connect(mapStateToProps)(ChartPanel);