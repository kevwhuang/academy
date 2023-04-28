import React from 'react';

interface Style {
    backgroundColor: string,
    height: string,
}

export default function Random(): React.ReactElement {
    let backgroundColor: string = '#';

    while (backgroundColor.length < 7) {
        backgroundColor += Math.floor(Math.random() * 10);
    }

    const style: Style = { backgroundColor, height: '100vh' };

    return <section style={style}></section>;
}
