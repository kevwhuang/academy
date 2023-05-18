import React from 'react';

interface Props {
    a: string,
    b: string,
    children: string,
    d?: string,
}

function Conditional({ a, b, children, d = 'd' }: Props): React.ReactElement {
    const data: string = 'text';

    return <p id={data} data-attribute={data}>{a}{b}{children}{d}</p>;
}

export default Conditional;
