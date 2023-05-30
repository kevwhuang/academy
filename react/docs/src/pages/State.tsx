import React from 'react';
import { Link } from 'react-router-dom';

import useStore from '../hooks/useStore';

function State(): React.ReactElement {
    const [removeUser, users]: [Function, User[]] = useStore(s => [s.removeUser, s.users]);

    function handleClick(): void {
        removeUser(Math.floor(Math.random() * users.length));
    }

    return (
        <section id="zustand">
            <Link to="" onClick={handleClick}>Delete</Link>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <p>{user.name}</p>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default State;
