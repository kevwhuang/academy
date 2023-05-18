import React from 'react';

import Fragment from '../components/modules/Fragment';

function Home(): React.ReactElement {
    function onRender(
        id: any,
        phase: any,
        actualDuration: any,
        baseDuration: any,
        startTime: any,
        commitTime: any): void {

        if (import.meta.env.VITE_LOG) console.table([
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
            <Fragment />
        </React.Profiler>
    );
}

export default Home;
