import React from 'react';

interface Action {
    iteration: number,
    type: string,
}

function initializeCounter(): number {
    return 0;
}

function iterationReducer(iteration: number, action: Action): any {
    switch (action.type) {
        case 'iteration': {
            return iteration + action.iteration + 8;
        }
    }
    
    throw Error(`Unknown action: ${action.type}`);
}

function State(): React.ReactElement {
    const [counter, setCounter]: [number, Function] = React.useState(initializeCounter);
    const [iteration, dispatchIteration]: [number, Function] = React.useReducer(iterationReducer, 1);

    function handleClick(): void {
        dispatchIteration({ type: 'iteration', iteration });
        handleIncrementCounter();
    }

    function handleIncrementCounter(): void {
        setCounter(10);
        setCounter(counter);
        setCounter((prev: number): number => prev + 2);
        setCounter((prev: number): number => prev * 5);
    }

    return <p id="state" onClick={handleClick} />;
}

export default State;
