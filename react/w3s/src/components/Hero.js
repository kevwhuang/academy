import React from 'react';

const c = console.log;
const myClass = 'text';

function Hero(props) {
    return (
        <header>
            {React.createElement('h1', {}, 'Hello World!')}
            <Display myClass={myClass} initColor="peru" />
        </header>
    );
}

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
    }
}

export default Hero;
