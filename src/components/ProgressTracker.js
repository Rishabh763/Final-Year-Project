import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { GrHostMaintenance } from "react-icons/gr";


function ProgressTracker() {

  const barData = [
    { name: "Week 1", value: 60 },
    { name: "Week 2", value: 75 },
    { name: "Week 3", value: 80 },
    { name: "Week 4", value: 90 },
  ];
  return (
    <div className='min-h-[50vh]'>
      <h2 className="text-xl font-bold mb-4 text-primary">
        Progress Tracker
      </h2>
      {/* <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="hsl(221.2, 83.2%, 53.3%)" />
        </BarChart>
      </ResponsiveContainer> */}
      <div className='mt-24 grid place-items-center h-full'>

        <GrHostMaintenance className='text-center' size={128} color='#2563eb' />
        <h3 className='text-primary text-center'>This part is under Work</h3>
      </div>
    </div>
  )
}

export default ProgressTracker
