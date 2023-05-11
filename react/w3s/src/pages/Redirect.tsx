import React from 'react';
import { useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';

export default function Redirect(): React.ReactElement {
    const navigate: Function = useNavigate();
    const params: any = useParams();
    const [searchParams, setSearchParams]: [any, Function] = useSearchParams();

    console.log(useLocation());
    console.log(searchParams.get('key'));

    React.useEffect((): void => {
        setTimeout((): void => navigate('/', { state: 'Redirect' }), 2000);
    }, []);

    return <h1>{params.id}</h1>;
}
