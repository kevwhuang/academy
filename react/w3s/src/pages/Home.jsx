import React from 'react';

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function App() {
    const [counter, setCounter] = React.useState(0);

    return (
        <>
            <Navbar />
            <Hero counter={counter} setCounter={setCounter} />
            <Main />
            <Sidebar />
            <Footer />
        </>
    );
}

export default App;