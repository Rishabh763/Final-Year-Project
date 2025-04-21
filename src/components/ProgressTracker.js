import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";

function ProgressTracker() {

  const barData = [
    { name: "Week 1", value: 60 },
    { name: "Week 2", value: 75 },
    { name: "Week 3", value: 80 },
    { name: "Week 4", value: 90 },
  ];
  return (
    <div >
      <h2 className="text-xl font-bold mb-4 text-primary">
        Progress Tracker
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="hsl(221.2, 83.2%, 53.3%)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ProgressTracker
