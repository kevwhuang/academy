import 'dotenv/config';
import { createTerminus } from '@godaddy/terminus';
import { fileURLToPath } from 'url';

import actuator from 'express-actuator';
import hbs from 'express-handlebars';
import session from 'express-session';

import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import path from 'path';

import auth from './auth.mjs';
import router from './router.mjs';
import select from './pool.mjs';
import users from './data/users.mjs';

const COLOR = '\x1b[35m%s\x1b[0m';
const PORT = process.env.PORT || 65535;

const OPTS_CORS = {
    credentials: true,
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
};

const OPTS_ENGINE = {
    defaultLayout: 'template',
    extname: 'hbs',
};

const OPTS_SESSION = {
    resave: false,
    saveUninitialized: true,
    secret: 'Session',
    cookie: { secure: false },
};

const OPTS_STATIC = {
    redirect: false,
    dotfiles: 'allow',
    extensions: ['htm', 'html'],
    setHeaders(res) {
        res.set('Content-Security-Policy',
            'script-src \'self\' \'unsafe-inline\'');
    },
};

const OPTS_TERMINUS = {
    signal: 'SIGINT',
    healthChecks: { '/healthcheck': () => Promise.resolve() },
    onSignal() {
        console.log(COLOR, '\nServer cleanup initiated.');
        return Promise.all([]);
    },
    onShutdown() {
        server.close();
        console.log(COLOR, 'Server gracefully terminated.');
    },
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app).listen(PORT - 1 || 65534);
const count = { n: 0 };

const logger = (req, res, next) => {
    const log = {
        time: new Date().toUTCString(),
        url: `${req.protocol}://${req.get('host')}${req.path}`,
        method: req.method,
    };

    if (Object.keys(req.body).length) {
        const body = { ...req.body };

        if (body.password) body.password = '******';
        log.body = JSON.stringify(body).slice(1, -1)
            .replaceAll('"', '').replaceAll(':', ' : ').replaceAll(',', ' | ');
    }

    if (Object.keys(req.query).length) {
        log.query = JSON.stringify(req.query).slice(1, -1)
            .replaceAll('"', '').replaceAll(':', ' : ').replaceAll(',', ' | ');
    }

    if (!count.n) {
        for (const e in req.cookies) res.clearCookie(e);
        req.cookies = {};
    }

    if (!log.url.includes('favicon.ico')) {
        count.n++;
        res.cookie(`Query ${count.n}`, Math.trunc(Math.random() * 1e15), {});
        console.table(log);
    }

    next();
};

const error = async (err, req, res, next) => {
    res.status(500);
    next(err);
};

app.listen(PORT, () => {
    console.log(COLOR, `Server listening on PORT ${PORT}.`);
    createTerminus(server, OPTS_TERMINUS);
});

app.engine('hbs', hbs.engine(OPTS_ENGINE));

app.set('env', 'production');
app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../public'));

app.enable('case sensitive routing');

app.disable('strict routing');
app.disable('x-powered-by');

app.use(express.json());
app.use(express.raw());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use(actuator());
app.use(compression());
app.use(cookieParser());
app.use(cors(OPTS_CORS));
app.use(helmet());
app.use(session(OPTS_SESSION));

app.use(logger);
app.use(express.static(path.join(__dirname, '../'), OPTS_STATIC));
app.use('/auth', auth);
app.use('/api/users', router);

app.param(['a', 'b'], (req, res, next, val) => {
    console.log('Parameter', {
        [Object.keys(req.params).find(k => req.params[k] === val)]: val,
    });
    next();
});

app.route(['/api/route'])
    .get([(req, res, next) => next('route')])
    .post((req, res) => res.status(201).send('POST!'))
    .put((req, res) => res.status(204).send('PUT!'))
    .patch((req, res) => res.status(204).send('PATCH!'))
    .delete((req, res) => res.status(204).send('DELETE!'))
    .all((req, res) => res.send(`${req.method}!`));

app.get('/api', (req, res) => {
    res.render('home', { heading: 'ROUTES', users });
});

app.get('/api/cookies', (req, res) => {
    res.json(req.cookies);
});

app.get('/api/download', (req, res) => {
    res.append('Content-Type', 'text/plain');
    res.cookie('download_photo', true, { maxAge: 3600e3 });
    res.links({ home: `${req.protocol}://${req.get('host')}/api` });
    res.location('back');
    res.type('html');
    res.vary('User-Agent');

    res.attachment(path.join(__dirname, '../assets/andres-torres.jpg'));
    res.end();
});

app.get('/api/error', () => {
    throw new Error('500');
});

app.get('/api/params/:a..:b', (req, res) => {
    res.send(req.params);
});

app.get('/api/route', (req, res) => {
    res.send('GET!');
});

app.get('/api/photo', (req, res) => {
    res.sendFile(path.join(__dirname, '../assets/nina-nesbitt.jpg'));
});

app.get('/api/sql', select);

app.all(/(^\/api\/).*/, (req, res) => {
    res.status(308).redirect('/api');
});

app.all(/^(?!(^\/api\/?$)).*/, (req, res) => {
    res.status(308).redirect('/');
});

app.all('*', (req, res) => {
    res.status(308).redirect(302, '/');
});

app.use(error);
