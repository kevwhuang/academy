import axios, { AxiosResponse } from 'axios';
import useSWR, { SWRResponse } from 'swr';

const base: string = 'https://jsonplaceholder.typicode.com/users/';

function fetcher(endpoint: string): Promise<any> {
    return axios(`${base}${endpoint}`).then((res: AxiosResponse<any, any>): any => res.data);
}
function useFetch(endpoint: string): any {
    const shouldFetch: boolean = true;
    const { data, error, isLoading }: SWRResponse<any, Error, any>
        = useSWR<string, Error>(shouldFetch ? endpoint : null, fetcher);

    return { data, error, loading: isLoading };
}

export default useFetch;
