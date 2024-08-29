import React from 'react'
import { Link } from 'react-router-dom'
import GetUser from '../components/GetUser'


function login() {
  return (
    <div className='content-grid min-h-screen'>
        <div className='grid place-content-center gap-4'>
          <Link to="/" className='px-4 py-1 w-fit ring-2 ring-slate-300 rounded-lg'>back</Link>
          login
          <GetUser/>
        </div>
    </div>
  )
}

export default login