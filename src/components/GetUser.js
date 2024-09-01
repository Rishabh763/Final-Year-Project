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
        <div className=' mx-auto max-w-md space-y-4'>
            <input
                type="text"
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" onClick={handleFetch}>Get User</button>
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
