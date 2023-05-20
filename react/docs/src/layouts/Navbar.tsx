import React from 'react';
import { Outlet } from 'react-router-dom';

import useOnlineStatus from '../hooks/useOnlineStatus';

function Navbar(): React.ReactElement {
    document.title = useOnlineStatus() ? 'React Docs' : '<Offline>';

    return <Outlet />;
}

export default Navbar;
