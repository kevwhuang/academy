import React from 'react';
import { v4 as uuid } from 'uuid';

import { CircularProgress } from '@mui/material';

const Suspense: React.LazyExoticComponent<any> = React.lazy((): any => import('../elements/Suspense'));

function Fragment(): React.ReactElement {
    return (
        <React.Fragment key={uuid()}>
            <React.Suspense
                fallback={<CircularProgress id="spinner" color="secondary" size="5rem" />}
            >
                <Suspense />
            </React.Suspense>
        </React.Fragment>
    );
}

export default Fragment;
