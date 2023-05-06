import React from 'react';
import { v4 as uuid } from 'uuid';

import useFetch from '../hooks/useFetch';
import { CounterContext } from '../pages/Home.tsx';
import { openModal } from '../scripts/viewTransitions';
import '../css/scss/Display.scss';

const c = console.log;
const myClass = 'text-box';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = { style: { color: this.props.initColor } };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <p
                className={this.props.myClass}
                style={this.state.style}
                onClick={this.handleClick}
                onMouseOver={e => this.handleMouseOver('Hovering', e)}
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
        );
    }

    componentDidMount() {
        c('Rendered');
    }

    static getDerivedStateFromProps(props, state) {
        c('Updating');
        return null;
    }

    shouldComponentUpdate() {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        c(`Previous props: ${JSON.stringify(prevProps)}`);
        c(`Previous state: ${JSON.stringify(prevState)}`);
        return null;
    }

    componentDidUpdate() {
        c('Updated');
    }

    componentWillUnmount() {
        c('Unmounting');
    }

    handleClick() {
        this.state.style.color === 'peru'
            ? this.setState({ style: { color: 'teal' } })
            : this.setState({ style: { color: 'peru' } });
    }

    handleMouseOver = (status, e) => {
        c(`${status} (${e.type})`);
    };
}

function Pokemon(props) {
    const counterRef = React.useRef(-1);
    const { counter, dispatchCounter } = React.useContext(CounterContext);

    const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
    const pokedex = [];
    const pokemon = useFetch('');
    let pokenumber = 1;

    React.useEffect(() => { counterRef.current++ }, [props.counter]);
    while (pokenumber <= 20) pokedex.push(pokenumber++);

    function incrementCounter() {
        dispatchCounter({ type: 'yes' });

        if (counterRef.current === counter + 1) {
            c(`%cClick count: ${counterRef.current}`, 'color:peru;');
        }
    }

    return (
        <ul className="pokemon" onClick={incrementCounter}>
            {pokemon.map((e, i) => {
                if (i in pokedex) {
                    const text = `Image of ${(e.name)[0].toUpperCase()}${e.name.slice(1)}.`;

                    return (
                        <li className="card" key={uuid()} onClick={openModal}>
                            <h6>{e.name}</h6>
                            <img src={`${baseURL}${i + 1}.svg`} alt={text} />
                        </li>
                    );
                }
            })}
        </ul>
    );
}

function Hero({ counter }) {
    return (
        <header>
            {React.createElement('h1', {}, 'Hello World!')}
            <Display myClass={myClass} initColor="peru" />
            <Pokemon counter={counter} />
        </header>
    );
}

export default React.memo(Hero);
