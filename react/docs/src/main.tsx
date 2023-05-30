import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

import Navbar from './layouts/Navbar';

import Error from './pages/Error';
import Fallback from './pages/Fallback';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Params from './pages/Params';
import State from './pages/State';

import './utilities/logs';

import './styles/rectify.scss';
import './styles/main.scss';
import './styles/utilities.scss';
import './styles/keyframes.scss';

const router: any = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Navbar />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="params" element={<Params />}>
            <Route path=":id" />
        </Route>
        <Route path="state" element={<State />} />
    </Route>
));

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <RouterProvider router={router} fallbackElement={<Fallback />} />
    </StrictMode>
);
