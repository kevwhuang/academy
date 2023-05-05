import React from 'react';

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Main from '../components/Main';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Home(): React.ReactElement {
    const [counter, setCounter]: [number, Function] = React.useState(0);

    return (
        <>
            <Navbar />
            <Hero counter={counter} setCounter={setCounter} />
            <Main />
            <Sidebar />
            <Footer />
            <Modal />
        </>
    );
}
