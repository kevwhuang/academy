import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout(): React.ReactElement {
    return (
        <>
            <Outlet />
        </>
    );
}

export default Layout;
