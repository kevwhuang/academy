import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

export default function Layout(): React.ReactElement {
    return (
        <>
            <div id="layout" style={{ display: 'none' }}>
                <Link to="">Home</Link>
                <NavLink end reloadDocument to="/random">Random</NavLink>
            </div>
            <Outlet />
        </>
    );
}
