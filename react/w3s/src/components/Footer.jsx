import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {
    SentimentDissatisfied as $SentimentDissatisfied,
    SentimentNeutral as $SentimentNeutral,
    SentimentSatisfied as $SentimentSatisfied,
} from '@mui/icons-material';
import {
    BottomNavigation,
    BottomNavigationAction,
    colors as $Color,
} from '@mui/material';
import { styled as $Styled } from '@mui/system';

const _Container = styled.div`
    left: 50%;
    padding: .5rem;
    position: absolute;
    top: 35%;
    transform: translate(-50%, -35%);
    &:hover {
        outline: 1px solid #21b184;
    };
`;

const _Copyright = $Styled('p')({
    bottom: 4,
    left: '50%',
    position: 'absolute',
    textAlign: 'center',
    transform: 'translateX(-50%)',
    userSelect: 'none',
    width: '100%',
});

const _Footer = $Styled('footer')({
    height: '200px',
    position: 'relative',
});

Footer.defaultProps = {
    text: '© 2023 Kevin Huang',
};

Footer.propTypes = {
    text: PropTypes.string.isRequired,
};

function Footer(props) {
    const [position, setPosition] = React.useState(1);

    const sx = {
        '& .Mui-selected': {
            color: position === 0 ? '#3e7d33' : position === 1 ? '#1c76d2' : '#e94033',
        },
    };

    return (
        <_Footer>
            <_Copyright>{props.text}</_Copyright>
            <_Container>
                <BottomNavigation
                    className="mood"
                    showLabels
                    value={position}
                    sx={sx}
                    onChange={(e, i) => setPosition(i)}>
                    <BottomNavigationAction
                        className="mood-label"
                        label="Happy"
                        icon={<$SentimentSatisfied
                            className="mood-icon"
                            fontSize="large"
                            color="success" />} />
                    <BottomNavigationAction
                        className="mood-label"
                        label="Neutral"
                        icon={<$SentimentNeutral
                            className="mood-icon"
                            fontSize="large"
                            color="primary" />} />
                    <BottomNavigationAction
                        className="mood-label"
                        label="Sad"
                        icon={<$SentimentDissatisfied
                            className="mood-icon"
                            fontSize="large"
                            sx={{ color: $Color.red[500] }} />} />
                </BottomNavigation>
            </_Container>
        </_Footer>
    );
}

export default Footer;
