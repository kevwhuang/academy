import React from 'react';

import GlobalContext from '../../contexts/GlobalContext';

interface Props {
    a: string,
    b: string,
    children: string,
    d?: string,
}

const data: string = 'props';

function Props({ a, b, children, d = 'd' }: Props): React.ReactElement {
    const { letter: e }: any = React.useContext(GlobalContext);

    return (
        <section
            id={data}
            data-attribute={data}
            aria-describedby={React.useId()}
        >
            {a}{b}{children}{d}{e}
        </section>
    );
}

export default Props;
