import React from 'react';

import Footer from './components/Footer';
import Hero from './components/Hero';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './css/App.css';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Main />
            <Sidebar />
            <Footer />
        </>
    );
}

export default App;
