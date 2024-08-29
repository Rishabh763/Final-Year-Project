import React from 'react'
import AddUserForm from '../components/AddUserForm'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='content-grid min-h-screen'>
    <div className='grid place-content-center gap-4'>
      <Link to="/" className='px-4 py-1 w-fit ring-2 ring-slate-300 rounded-lg'>back</Link>
      signup
      <AddUserForm/>
    </div>
</div>
  )
}

export default Signup