// @ts-nocheck

import axios from 'axios';
import { create } from 'zustand';

const initialize: State = {
    users: await getUsers() || {},
};

const useStore = create<Actions & State>(set => ({
    ...initialize,
    removeUser: num => set(s => ({ users: s.users.filter((e, i): boolean => i !== num) })),
}));

async function getUsers(): Promise<User[]> {
    const res: any = await axios('https://jsonplaceholder.typicode.com/users');
    let users: User[] = [];

    for (const user of res.data) {
        users.push({
            email: user.email,
            id: user.id,
            name: user.name,
            username: user.username,
        });
    }

    return users;
}

export default useStore;
