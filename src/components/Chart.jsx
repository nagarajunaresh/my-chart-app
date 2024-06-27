import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from '../data/data.json'; // Importing JSON data

import styles from '../styles/Chart.module.css'; // Importing CSS module

const Chart = ({ timeframe }) => {
  const [chartData, setChartData] = useState([]);

  // Function to filter data based on timeframe
  const filterDataByTimeframe = (timeframe) => {
    let newData = [];

    switch (timeframe) {
      case 'daily':
        newData = data.slice(0, 10); // Show first 10 days for daily view
        break;
      case 'weekly':
        newData = data.slice(0, 7); // Show first week (7 days) for weekly view
        break;
      case 'monthly':
        newData = data; // Show entire month for monthly view
        break;
      default:
        newData = data;
        break;
    }

    return newData;
  };

  // Update chartData when timeframe changes
  React.useEffect(() => {
    const filteredData = filterDataByTimeframe(timeframe);
    setChartData(filteredData);
  }, [timeframe]);

  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.chartTitle}>Chart</h2>
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#007bff" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
