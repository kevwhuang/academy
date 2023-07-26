import React from 'react';

function useFetch(url) {
    const [pokemon, setPokemon] = React.useState([]);

    React.useDebugValue('pokemon');

    React.useEffect(() => {
        let controller = new AbortController();

        (async () => {
            try {
                const { endpoint } = await import('../resources/endpoint');
                const res = await fetch(endpoint, { signal: controller.signal });

                if (!res.response) {
                    setPokemon((await res.json()).results);
                    controller = null;
                }
            } catch (err) { }
        })();

        return () => controller?.abort();
    }, [url]);

    return pokemon;
}

export default useFetch;
