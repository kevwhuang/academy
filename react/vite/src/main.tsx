import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Error from './routes/Error.tsx';
import Home from './routes/Home.tsx';
import Layout from './routes/Layout.tsx';

import './scss/rectify.scss';
import './scss/root.scss';
import './scss/main.scss';
import './scss/utilities.scss';
import './scss/keyframes.scss';
import './scss/media.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
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
