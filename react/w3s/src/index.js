import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Error from './pages/Error';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Random from './pages/Random';

import './css/rectify.css';
import './css/root.css';
import './css/index.css';
import './css/App.css';
import './css/utilities.css';
import './css/keyframes.css';
import './css/media.css';

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="random" element={<Random />} />
                        <Route path="*" element={<Error />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
