import React from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

import CellTowerIcon from '@mui/icons-material/CellTower';

import suspense from '../../libraries/suspense';

function Photos(): React.ReactElement {
    const [promise, setPromise]: [any, Function] = React.useState(null);

    const styleNav: Object = {
        borderBottom: '5px solid black',
        textAlign: 'center',
    };

    function delay(ms: number): Promise<any> {
        return new Promise((res: any): any => setTimeout(res, ms));
    }

    function handleClick(): void {
        setPromise(suspense(getUsers()));
    }

    async function getUsers(): Promise<any> {
        await delay(2000);
        return axios('https://randomuser.me/api/?results=100&nat=us');
    }

    const data: Object[] | null = promise ? promise.read().data.results : null;

    return (
        <>
            <nav style={styleNav}>
                <CellTowerIcon
                    id="button"
                    onClick={handleClick}
                    sx={{ cursor: 'pointer', fontSize: '100px' }}
                />
            </nav>
            <ul id="photos">
                {data && data.map((e: any) => <li key={uuid()}><img src={e.picture.large} /></li>)}
            </ul>
        </>
    );
}

export default Photos;
