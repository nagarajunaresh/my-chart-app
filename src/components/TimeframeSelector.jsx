import React from 'react';

import styles from '../styles/TimeframeSelector.module.css'; // Importing CSS module

const TimeframeSelector = ({ onSelect }) => (
  <div className={styles.timeframeSelector}>
    <h2>Timeframe Selector</h2>
    <button onClick={() => onSelect('daily')}>Daily</button>
    <button onClick={() => onSelect('weekly')}>Weekly</button>
    <button onClick={() => onSelect('monthly')}>Monthly</button>
  </div>
);

export default TimeframeSelector;
