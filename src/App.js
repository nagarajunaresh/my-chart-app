import React, { useState } from 'react';
import Chart from './components/Chart';
import TimeframeSelector from './components/TimeframeSelector';

import './App.css'; // Importing global CSS for App

const App = () => {
  const [timeframe, setTimeframe] = useState('monthly');

  const handleTimeframeSelect = (selectedTimeframe) => {
    setTimeframe(selectedTimeframe);
  };

  return (
    <div className="app">
      <h1 className="app-title">My Chart App</h1>
      <div className="content">
        <TimeframeSelector onSelect={handleTimeframeSelect} />
        <Chart timeframe={timeframe} />
      </div>
    </div>
  );
};

export default App;
