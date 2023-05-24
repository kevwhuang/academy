import React from 'react';

import Effect from '../components/modules/Effect';
import Fragment from '../components/modules/Fragment';
import Hidden from '../components/modules/Hidden';
import Ref from '../components/modules/Ref';

import GlobalContext from '../contexts/GlobalContext';
import useAxios from '../hooks/useAxios';

const endpoint = 'https://randomuser.me/api/?results=100&nat=us';
let init = false;

function Home(): React.ReactElement {
    if (!init) {
        const data: any = useAxios(endpoint);

        if (data.length) {
            import.meta.env.VITE_LOGS && console.log(data);
            init = true;
        }
    }

    function onRender(
        id: any,
        phase: any,
        actualDuration: any,
        baseDuration: any,
        startTime: any,
        commitTime: any): void {

        import.meta.env.VITE_LOGS && console.table([
            `ID: ${id}`,
            `Phase: ${phase}`,
            `Actual duration: ${Math.round(actualDuration)} ms`,
            `Base duration: ${Math.round(baseDuration)} ms`,
            `Start time: ${Math.round(startTime)} ms`,
            `Commit time: ${Math.round(commitTime)} ms`,
        ]);
    }

    return (
        <React.Profiler id="Fragment" onRender={onRender}>
            <GlobalContext.Provider value="f">
                <Fragment />
                <Ref />
                <Effect />
                <Hidden />
            </GlobalContext.Provider>
        </React.Profiler >
    );
}

export default Home;
