import React from 'react';

const title = React.createElement('h1', {}, 'Hello World!');

function Hero() {
    return (
        <header>
            {title}
        </header>
    );
}

export default Hero;
