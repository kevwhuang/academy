import React from 'react';

const Counter: React.ForwardRefExoticComponent<any>
    = React.forwardRef((props: any, ref: any) => {
        return (
            <button {...props} ref={ref}>
                {props.children}
            </button>
        );
    });

export default Counter;
