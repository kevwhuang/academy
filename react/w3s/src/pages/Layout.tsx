import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout(): React.ReactElement {
    return (
        <>
            <div id="layout" style={{ display: 'none' }}>
                <Link to="">Home</Link>
                <Link to="/random">Random</Link>
            </div>
            <Outlet />
        </>
    );
}
