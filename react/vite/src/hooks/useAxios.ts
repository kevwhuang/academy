import axios, { AxiosResponse } from 'axios';
import useSWR, { SWRResponse } from 'swr';

const base: string = '';

function fetcher(endpoint: string): Promise<any> {
    return axios(`${base}${endpoint}`).then((res: AxiosResponse<any, any>): any => res.data);
}
function useAxios(endpoint: string): any {
    const { data, error, isLoading }: SWRResponse<any, Error, any>
        = useSWR<string, Error>(endpoint, fetcher);

    return { data, error, loading: isLoading };
}

export default useAxios;
