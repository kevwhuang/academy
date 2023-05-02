import PropTypes from 'prop-types';
import React from 'react';
import { FaTimes } from 'react-icons/fa';

Footer.defaultProps = {
    title: 'Hello!!!',
};

Footer.propTypes = {
    title: PropTypes.string.isRequired,
};

function Footer(props) {
    return (
        <footer>
            <FaTimes />
            {props.title}
        </footer>
    );
}

export default Footer;
