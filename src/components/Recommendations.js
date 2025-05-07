import React from 'react'
import { GrHostMaintenance } from "react-icons/gr";


function Recommendations() {
  return (
    <div className='min-h-[50vh]'> 
      <h2 className="text-xl font-bold mb-4 text-primary">
      Recommendations
    </h2>
      <div className='mt-24 grid place-items-center h-full'>

        <GrHostMaintenance className='text-center' size={128} color='#2563eb' />
        <h3 className='text-primary text-center'>This part is under Work</h3>
      </div>
    </div>
  )
}

export default Recommendations