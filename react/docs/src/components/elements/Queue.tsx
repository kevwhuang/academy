import React from 'react';

function Queue(): React.ReactElement {
    const [counter, setCounter]: [number, Function] = React.useState(0);

    function handleClick(): void {
        setCounter(10);
        setCounter(counter);
        setCounter((prev: number): number => prev + 2);
        setCounter((prev: number): number => prev * 2);
    }

    return <p id="queue" onClick={handleClick}></p>;
}

export default Queue;
