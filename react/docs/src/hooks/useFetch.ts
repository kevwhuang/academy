import React from 'react';
import axios from 'axios';

type Users = Array<{ photo: string }>;

function useFetch(url: string): Users {
    const [users, setUsers]: [Users, Function] = React.useState([]);

    React.useLayoutEffect((): any => {
        let controller: AbortController | null = new AbortController();
        const signal: AbortSignal = controller.signal;

        async function getUsers(): Promise<void> {
            const data: any = [];
            const res: any = await axios(url, { signal }).catch((): void => { });

            try {
                res.data.results.forEach((u: { picture: { large: string } }): void => {
                    data.push({ photo: u.picture.large });
                });

                setUsers(data);
            } catch {
                controller = null;
            }
        }

        getUsers();
        return (): void => controller?.abort();
    }, []);

    return users;
}

export default useFetch;
