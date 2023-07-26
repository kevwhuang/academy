import React from 'react';
import axios, { AxiosResponse } from 'axios';

const endpoint: string = 'https://jsonplaceholder.typicode.com/users';
const src: string = 'https://atxproducers.com/audio/b118-synth-pop.mp3';

function Effect(): React.ReactElement {
    const audioRef: React.MutableRefObject<any> = React.useRef(null);

    const [isHover, setIsHover]: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
        = React.useState(false);
    const [isPlaying, setIsPlaying]: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
        = React.useState(false);

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

    navigator.onLine && React.useEffect((): void => {
        audioRef.current.currentTime = 0;
        isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }, [isPlaying]);

    import.meta.env.VITE_FETCH && React.useEffect((): any => {
        let ignore: boolean = false;

        function cleanup(): void {
            ignore = true;
        }

        (async (): Promise<any> => {
            const res: AxiosResponse<any, any> = await axios(endpoint);
            const data: Object = res.data;

            !ignore && console.log(data);
        })();

        return cleanup;
    }, []);

    function handleClick(): void {
        setIsPlaying(!isPlaying);
    }

    function handleMouseEnter(): void {
        setIsHover(true);
    }

    function handleMouseLeave(): void {
        setIsHover(false);
    }

    return (
        <section id="effect">
            <button
                id="button-effect"
                style={styleButton}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {isPlaying ? '■' : '►'}
            </button>
            <audio loop ref={audioRef}>
                <source src={navigator.onLine ? src : ''} type="audio/mpeg" />
            </audio>
        </section>
    );
}

export default Effect;
