import React from 'react';
import { useParams } from 'react-router-dom';
import Dashboard from '../components/Dashboard'

const User = () => {
    const { username } = useParams();

    return (
        <div className='content-grid '>
            <Dashboard username={username}/>

            {/* Additional user details can be fetched here based on the username */}
        </div>
    );
};

export default User;
