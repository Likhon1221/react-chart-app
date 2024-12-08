// Task 5. Render Charts in the App

import React, { useState, useEffect } from 'react';
import './App.css';
import financialData from './assets/data.json'; 
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

const App = () => {
    const [chartData, setChartData] = useState(null); 
    const [loading, setLoading] = useState(true);     

    // Load the financial data
    useEffect(() => {
        setChartData(financialData); 
        setLoading(false);           
    }, []); 

    // Show a loading message while the data
    if (loading) return <p>Loading charts...</p>;

    return (
        <div className="dashboard">
            <h1>Financial Data Dashboard</h1>
            <div className="chart-grid">
                <div className="chart-item"><BarChart data={chartData} /></div>
                <div className="chart-item"><LineChart data={chartData} /></div>
                <div className="chart-item"><ScatterChart data={chartData} /></div>
                <div className="chart-item"><BubbleChart data={chartData} /></div>
            </div>
        </div>
    );
};

export default App;