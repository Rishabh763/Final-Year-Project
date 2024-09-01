import React from 'react'
import { Link } from 'react-router-dom'
import GetUser from '../components/GetUser'


function login() {
  return (
    <div className='content-grid bg-muted  min-h-screen'>
        <div className='grid place-content-center gap-4 items-center'>
          <Link to="/" className="inline-flex w-fit items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted full-width hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">back</Link>
          <h1>login</h1>
          <GetUser/>
        </div>
    </div>
  )
}

export default login