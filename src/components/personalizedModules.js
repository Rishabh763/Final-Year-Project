import React from 'react'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
  } from "recharts";

function personalizedModules() {
    const pieData = [
        { name: "Completed", value: 70 },
        { name: "Pending", value: 30 },
      ];
    
      const COLORS = ["#4C7FF7", "#A3C9FF"]; 
  return (
    <div>
              <h2 className="text-xl font-bold mb-4 text-primary">
                Personalized Modules
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
  )
}

export default personalizedModules