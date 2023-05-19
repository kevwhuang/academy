import React from 'react';

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Main from '../components/Main';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';

export const CounterContext: any = React.createContext(null);

export default function Home(): React.ReactElement {
    const [counter, dispatchCounter]: [number, Function] = React.useReducer(counterReducer, 0);

    function counterReducer(state: number, action: { type: string }): number {
        if (action.type === 'yes') {
            return state + 1;
        }

        return state;
    }

    return (
        <CounterContext.Provider value={{ counter, dispatchCounter }}>
            <Navbar />
            <Hero counter={counter} />
            <Main />
            <Footer />
            <Modal />
        </CounterContext.Provider>
    );
}
