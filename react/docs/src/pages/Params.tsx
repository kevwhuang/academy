import React from 'react';
import { Link, Outlet, useParams, useSearchParams } from 'react-router-dom';

function Params(): React.ReactElement {
    const params: Readonly<any> = useParams();
    const [searchParams]: any = useSearchParams();

    Object.keys(params).length && console.log(params);
    searchParams.size && console.log(Object.fromEntries([...searchParams]));

    return (
        <section id="params">
            <Link to="..">Home</Link>
            <Outlet />
        </section>
    );
}

export default Params;
