import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './css/reset.css';
import './css/index.css';
import './css/App.css';
import './css/components/Navbar.css';
import './css/components/Hero.css';
import './css/components/Main.css';
import './css/components/Sidebar.css';
import './css/components/Footer.css';

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        // <React.StrictMode>
            <App />
        // </React.StrictMode>
    );
