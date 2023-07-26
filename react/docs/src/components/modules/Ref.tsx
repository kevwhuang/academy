import React from 'react';
import { flushSync } from 'react-dom';

import Counter from '../elements/Counter';

function Ref(): React.ReactElement {
    const buttonRef: React.MutableRefObject<any> = React.useRef(null);
    const numRef: React.MutableRefObject<number> = React.useRef(0);
    const timeoutRef: React.MutableRefObject<any> = React.useRef(null);

    const [isHover, setIsHover]: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
        = React.useState(false);
    const [num, setNum]: [number, React.Dispatch<React.SetStateAction<number>>]
        = React.useState(0);

    const styleButton: Object = {
        WebkitFontSmoothing: 'antialiased',
        background: 'black',
        border: 'none',
        color: 'white',
        display: 'block',
        fontSize: '100px',
        margin: 'auto',
        marginBottom: '1rem',
        opacity: isHover ? .9 : 1,
        padding: '0 1rem',
        transform: isHover ? 'scale(.9)' : 'none',
        transition: 'all .5s',
        userSelect: 'none',
    };

    function handleClick(): void {
        document.title = `Ref: ${buttonRef.current.textContent}`;
        window.clearTimeout(timeoutRef.current);

        timeoutRef.current = window.setTimeout((): void => {
            document.title = 'React Docs';
            flushSync((): void => setNum(++numRef.current));
        }, .5e3);
    }

    function handleMouseEnter(): void {
        setIsHover(true);
    }

    function handleMouseLeave(): void {
        setIsHover(false);
    }

    return (
        <section id="ref">
            <Counter
                id="button-ref"
                style={styleButton}
                ref={buttonRef}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {num}
            </Counter>
        </section>
    );
}

export default React.memo(Ref);
