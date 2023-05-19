import React from 'react';

interface Props {
    a: string,
    b: string,
    children: string,
    d?: string,
}

const data: string = 'props';

function Props({ a, b, children, d = 'd' }: Props): React.ReactElement {
    return (
        <p
            id={data}
            data-attribute={data}
            aria-describedby={React.useId()}
        >
            {a}{b}{children}{d}
        </p>
    );
}

export default Props;
