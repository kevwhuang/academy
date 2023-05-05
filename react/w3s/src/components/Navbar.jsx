import React from 'react';

import css from '../css/modules/Navbar.module.css';
import logo from '../media/react.ico';

function Navbar() {
    const sites = ['Render', 'Netlify', 'Heroku'];

    const links = sites.map((site, i) => {
        return (
            <li key={i}>
                <a href={`https://www.${site}.com`} target="_blank" rel="noreferrer">
                    {site}
                </a>
            </li>
        );
    });

    return (
        <nav>
            <ul className="menu">{links}</ul>
            <img className={css.logo} src={logo} alt="React logo" />
        </nav>
    );
}

export default Navbar;
