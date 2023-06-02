import React from 'react';
import { Outlet } from 'react-router-dom';

function Navbar(): React.ReactElement {
    return (
        <>
            <nav id="navbar">
            </nav>
            <Outlet />
        </>
    );
}

export default Navbar;
