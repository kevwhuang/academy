import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import { SWRConfig } from 'swr';

import Navbar from './layouts/Navbar';

import Error from './pages/Error';
import Fallback from './pages/Fallback';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import './styles/rectify.scss';
import './styles/root.scss';
import './styles/main.scss';
import './styles/utilities.scss';
import './styles/keyframes.scss';
import './styles/media.scss';

const config: Config = {};

const router: any = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Navbar />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
    </Route>
));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <SWRConfig value={config}>
            <RouterProvider router={router} fallbackElement={<Fallback />} />
        </SWRConfig>
    </React.StrictMode>
);
