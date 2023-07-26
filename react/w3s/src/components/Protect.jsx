import { Navigate } from 'react-router-dom';

import { checkAuth } from '../scripts/checkAuth';

function Protect(props) {
    const { component: Component, ...rest } = props;

    return checkAuth() ? <Component {...rest} /> : <Navigate to="/" />;
}

export default Protect;
