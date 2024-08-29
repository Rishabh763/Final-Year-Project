import React, { useState } from 'react';
import '../index.css'
import { addUser } from '../services/api';

const AddUserForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { username, email, password };
        try {
            const response = await addUser(userData);
            console.log(response.data.message);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form className='flex flex-col gap-4 w-fit' onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUserForm;
