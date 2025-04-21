import React from 'react'
import doc from "../doctors.json"

function professionalConsultation() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-primary">
        Professional Consultation
      </h2>
      <div className='special-grid'>
        {doc.doctors.map((d, index) => (
          <div className="space-y-4 shadow-2xl rounded-lg bg-background p-6 transition-transform hover:-translate-y-2 transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            to="#"

            key={index}>

            <img src="/Assets/Disorder.svg" alt="Disorder" className="size-20" />
            <h3 className="text-xl font-semibold truncate">{d.name}</h3>
            <p className="text-gray-600">
              {d.qualifications}
            </p>
            <p className="text-muted-foreground ">
              {d.description}
            </p>
            <div className='gap-2  flex flex-wrap '>
              {d.specialties.map((s, index) => (
                <span key={index} className=' rounded-sm px-2 py-1 bg-primary text-white'>{s}</span>
              ))
              }
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default professionalConsultation