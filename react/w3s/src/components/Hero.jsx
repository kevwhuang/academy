import React from 'react';
import { v4 as uuid } from 'uuid';

const c = console.log;
const myClass = 'text-box';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = { style: { color: this.props.initColor } };
    }

    static getDerivedStateFromProps(props, state) {
        c('Updating');
        return null;
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <>
                <p
                    className={this.props.myClass}
                    style={this.state.style}
                    onClick={this.changeColor}
                    onMouseOver={event => this.mouseOver('Hovering', event)}
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente molestiae tempore non ullam quae est quo.
                    Provident laborum consequuntur corporis! Ipsam soluta rem deleniti!
                    Voluptates quisquam quaerat explicabo laborum. At, optio enim.
                    Doloremque ratione minima ipsa ex? Eius, officiis error.
                    Delectus doloremque nesciunt provident aliquid consequuntur debitis doloribus.
                    Et ad, iure libero assumenda cupiditate velit modi.
                    Maiores saepe dolor cumque, id asperiores fugiat laboriosam.
                    At accusamus itaque obcaecati quae voluptatem est possimus.
                    Minima, dolore. Dicta dignissimos nobis obcaecati itaque illum.
                </p>
            </>
        );
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        c(`Previous props: ${JSON.stringify(prevProps)}`);
        c(`Previous state: ${JSON.stringify(prevState)}`);
        return null;
    }

    componentDidUpdate() {
        c('Updated');
    }

    componentDidMount() {
        c('Rendered');
    }

    componentWillUnmount() {
        c('Unmounting');
    }

    changeColor = () => {
        this.state.style.color === 'peru'
            ? this.setState({ style: { color: 'teal' } })
            : this.setState({ style: { color: 'peru' } });
    };

    mouseOver = (status, event) => {
        c(`${status} (${event.type})`);
    };
}

function Pokemon() {
    const [pokemon, setPokemon] = React.useState([]);
    const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
    const pokedex = [];
    let pokenumber = 1;

    while (pokenumber <= 20) pokedex.push(pokenumber++);

    React.useEffect(() => {
        (async function () {
            const { endpoint } = await import('../resources/endpoint');
            const res = await fetch(endpoint);

            if (!res.response) {
                const data = await res.json();
                setPokemon(data.results);
            }
        }());
    }, []);

    return (
        <ul className="pokemon">
            {pokemon.map((e, i) => {
                if (i in pokedex) {
                    return (
                        <li className="card" key={uuid()}>
                            <h6>{e.name}</h6>
                            <img src={`${baseURL}${i + 1}.svg`} alt={e.name} />
                        </li>
                    );
                }
            })}
        </ul>
    );
}

function Hero() {
    return (
        <header>
            {React.createElement('h1', {}, 'Hello World!')}
            <Display myClass={myClass} initColor="peru" />
            <Pokemon />
        </header>
    );
}

export default Hero;
