import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './layouts/Navbar.tsx';

import Error from './pages/Error.tsx';
import Home from './pages/Home.tsx';

import './styles/rectify.css';
import './styles/root.css';
import './styles/main.css';
import './styles/utilities.css';
import './styles/keyframes.css';
import './styles/media.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
