import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/TrafficChart.css';

const data = [
    { name: 'January', Users: 40 },
    { name: 'February', Users: 60 },
    { name: 'March', Users: 80 },
    { name: 'April', Users: 100 },
];

function TrafficChart() {
    return (
        <ResponsiveContainer width="95%" height={300}>
            <br /><br />
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Users" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default TrafficChart;