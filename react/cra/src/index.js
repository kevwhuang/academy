import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Error from './routes/Error.tsx';
import Home from './routes/Home.tsx';
import Layout from './routes/Layout.tsx';

import './css/rectify.css';
import './css/root.css';
import './css/main.css';
import './css/utilities.css';
import './css/keyframes.css';
import './css/media.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
