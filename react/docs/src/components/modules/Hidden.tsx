import React from 'react';

import Props from '../elements/Props';
import State from '../elements/State';

import GlobalContext from '../../contexts/GlobalContext';
import useFetch from '../../hooks/useFetch';

function Hidden(): React.ReactElement {
    useFetch('https://randomuser.me/api/?results=100&nat=us');

    const [letter, setLetter]: [string, Function] = React.useState('e');

    const cb: Function = React.useCallback((res: string): void => {
        setLetter(res);
    }, []);

    const contextValue: any = React.useMemo((): any => ({
        cb,
        letter,
    }), [cb, letter]);

    return (
        <GlobalContext.Provider value="f">
            <GlobalContext.Provider value={contextValue}>
                <Props a="a" b="b">c</Props>
                <State />
            </GlobalContext.Provider>
        </GlobalContext.Provider>
    );
}

export default Hidden;
