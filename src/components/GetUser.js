import React, { useState } from 'react';
import { getUser } from '../services/api';
import { Link } from 'react-router-dom';

const GetUser = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);

    const handleFetch = async () => {
        try {
            const response = await getUser(username);
            setUser(response.data);
        } catch (error) {
            console.error(error);
            setUser(null);
        }
    };

    return (
        <div className='flex flex-col gap-2 w-fit'>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleFetch}>Get User</button>
            {user && (
                <div>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <Link to={`/${user.username}`}  > click me</Link>
                </div>
            )}
        </div>
    );
};

export default GetUser;
