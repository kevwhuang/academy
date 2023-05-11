import cookie from 'cookie';

export function checkAuth() {
    const cookies = cookie.parse(document.cookie);

    if (cookies['loggedIn']) {
        return true;
    } else {
        for (const e in cookies) {
            document.cookie = cookie.serialize(e, null, { maxAge: 0 });
        }

        const code = prompt('Please enter access code.', '12345');
        const ms = 365 * 24 * 60 * 60 * 1000;

        if (code === '12345') {
            document.cookie = cookie.serialize('loggedIn', true, { maxAge: ms });
            return true;
        }

        return false;
    }
}
