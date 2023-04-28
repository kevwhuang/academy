export default function Random() {
    let backgroundColor = '#';

    while (backgroundColor.length < 7) {
        backgroundColor += Math.floor(Math.random() * 10);
    }

    const style = { backgroundColor, height: '100vh' };

    return <section style={style}></section>;
}
