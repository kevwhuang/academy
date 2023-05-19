import React from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

import CellTowerIcon from '@mui/icons-material/CellTower';

import suspense from '../../libraries/suspense';

const styleNav: Object = {
    borderBottom: '5px solid black',
    textAlign: 'center',
};

function delay(ms: number): Promise<any> {
    return new Promise((res: any): any => setTimeout(res, ms));
}

async function getUsers(): Promise<any> {
    await delay(2000);
    return axios('https://randomuser.me/api/?results=100&nat=us');
}

function Suspense(): React.ReactElement {
    const [promise, setPromise]: [any, Function] = React.useState(null);

    function handleClick(): void {
        const element: any = document.getElementById('button-ref');

        if (element) element.style.display = 'none';
        setPromise(suspense(getUsers()));
    }

    const data: Object[] | null = promise ? promise.read().data.results : null;

    return (
        <>
            <nav style={styleNav}>
                <CellTowerIcon
                    id="button-fetch"
                    sx={{ cursor: 'pointer', fontSize: '100px' }}
                    onClick={handleClick}
                />
            </nav>
            <ul id="photos">
                {data && data.map((e: any) =>
                    <li key={uuid()}><img src={e.picture.large} /></li>)}
            </ul>
        </>
    );
}

export default Suspense;
