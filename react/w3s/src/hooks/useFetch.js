import React from 'react';

function useFetch(url) {
    const [pokemon, setPokemon] = React.useState([]);

    React.useEffect(() => {
        (async function () {
            const { endpoint } = await import('../resources/endpoint');
            const res = await fetch(endpoint);

            if (!res.response) {
                const data = await res.json();
                setPokemon(data.results);
            }
        }());
    }, [url]);

    React.useDebugValue('pokemon');

    return pokemon;
}

export default useFetch;
