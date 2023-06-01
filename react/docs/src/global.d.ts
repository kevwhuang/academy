interface Actions {
    removeUser: (num: number) => void,
}

interface Config {
    keepPreviousData: boolean,
    refreshInterval: number,
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
