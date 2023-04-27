import { Link, Outlet } from 'react-router-dom';

function Layout() {
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

export default Layout;
