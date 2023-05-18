import React from 'react';
import { v4 as uuid } from 'uuid';

import Conditional from '../elements/Conditional';
import Queue from '../elements/Queue';
import { CircularProgress } from '@mui/material';

import useFetch from '../../hooks/useFetch';

const Photos: React.LazyExoticComponent<any> = React.lazy((): any => import('../elements/Photos'));

function Fragment(): React.ReactElement {
    useFetch('https://randomuser.me/api/?results=100&nat=us');

    return (
        <React.Fragment key={uuid()}>
            <Conditional a="a" b="b">c</Conditional>
            <Queue />
            <React.Suspense fallback={<CircularProgress id="spinner" color="secondary" size="5rem" />}>
                <Photos />
            </React.Suspense>
        </React.Fragment>
    );
}

export default Fragment;
