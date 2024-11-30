import React from 'react'

import {
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  } from "recharts";


const data = [
  {
    disease: 'Clinical Depression',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    disease: 'Anxiety Disorder',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    disease: 'Bipolar Disorder',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    disease: 'Dementia',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    disease: 'ADHD',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    disease: 'Schizophrenia',
    A: 65,
    B: 85,
    fullMark: 150,
  },
  {
    disease: 'OCD',
    A: 75,
    B: 95,
    fullMark: 150,
  },
  {
    disease: 'PTSD',
    A: 80,
    B: 100,
    fullMark: 150,
  },
];

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
              {/* <ResponsiveContainer width="100%" height={300}>
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
              </ResponsiveContainer> */}
              <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="disease" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
            </div>
  )
}

export default personalizedModules