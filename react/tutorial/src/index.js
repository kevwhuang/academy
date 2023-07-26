import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './css/reset.css';
import './css/index.css';
import './css/App.css';

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
