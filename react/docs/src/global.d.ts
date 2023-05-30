interface Actions {
    removeUser: (num: number) => void,
}

interface State {
    users: User[],
}

interface User {
    email: string,
    id: number,
    name: string,
    username: string,
}
