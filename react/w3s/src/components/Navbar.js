import logo from '../assets/react.ico';

function Navbar() {
    const sites = ['Render', 'Netlify', 'Heroku'];
    const links = sites.map((site, i) => {
        return (
            <li key={i}>
                <a href={`https://www.${site}.com`} target="_blank">
                    {site}
                </a>
            </li>
        );
    });

    return (
        <nav>
            <ul className="menu">{links}</ul>
            <img src={logo}></img>
        </nav>
    );
}

export default Navbar;
