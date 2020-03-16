import React from 'react';
import styles from './ChartPanel.module.scss';
import Chart from 'react-apexcharts'

const ChartPanel = ({ transactions }) => {
    const labels = ['Car & Transport','Fees/Bills','Food & Drinks','Home','Health & Hygiene', 'Entertaiment', 'Education', 'Personal', 'Shopping', 'Kids', 'Flights/Travels', 'Other'];
    const options = {
        labels,
    };
    let transactionsArray = [];
    const getSumArray = () => {
        let sum = [0,0,0,0,0,0,0,0,0,0,0,0];
        labels.map((label, labelIndex) => {
            transactions.map((expense) => {
                if (expense.categories === label) {
                    sum[labelIndex] += parseFloat(expense.amount)
                }
            })
        })
        let newSum = sum.map(item => item = Math.floor(item))
        transactionsArray = newSum;
    }
    const setWidthForChart = () => {
        const width = window.screen.availWidth
        if (width <= 320) {
            return 300
        } else if (width <= 375) {
            return 330
        } else if (width <= 415) {
            return 370
        } else {
            return 420
        }
    }
    return ( 
        <div className={styles.wrapper}>
            <p>Expenses: </p>
            {transactions !== undefined && getSumArray()}
            {transactions !== undefined && <Chart options={options} series={transactionsArray} type='donut' width={setWidthForChart()}/>}
        </div>
    );
}

export default ChartPanel