import React from 'react';

import Props from '../elements/Props';
import State from '../elements/State';

import useFetch from '../../hooks/useFetch';

function Hidden(): React.ReactElement {
    useFetch('https://randomuser.me/api/?results=100&nat=us');

    return (
        <>
            <Props a="a" b="b">c</Props>
            <State />
        </>
    );
}

export default Hidden;
