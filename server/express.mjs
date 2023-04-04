import 'dotenv/config';
import { createTerminus } from '@godaddy/terminus';
import { fileURLToPath } from 'url';

import actuator from 'express-actuator';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import hbs from 'express-handlebars';
import helmet from 'helmet';
import http from 'http';
import path from 'path';
import session from 'express-session';

import router from './router.mjs';
import select from './pool.mjs';
import users from './users.mjs';

const COLOR = '\x1b[35m%s\x1b[0m';
const PORT = process.env.PORT || 65535;

const OPTS_CORS = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
};

const OPTS_SESSION = {
    secret: 'Session',
    resave: false,
    saveUninitialized: true,
    cookie: {},
};

const OPTS_TERMINUS = {
    healthChecks: { '/healthcheck': () => Promise.resolve() },
    signal: 'SIGINT',
    onSignal() {
        console.log(COLOR, '\nServer cleanup initiated...');
        return Promise.all([]);
    },
    onShutdown() {
        server.close();
        console.log(COLOR, 'Server gracefully terminated...');
    },
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app).listen(PORT - 1 || 65534);
const count = { n: 0 };

const log = async (req, res, next) => {
    console.table({
        method: req.method,
        url: `${req.protocol}://${req.get('host')}${req.url}`,
        time: new Date().toUTCString(),
    });

    if (!count.n) for (const e in req.cookies) res.clearCookie(e);
    count.n += 1;
    res.cookie(`Query ${count.n}`, Math.trunc(Math.random() * 1e12));
    next();
};

const error = (err, req, res, next) => {
    res.status(500);
    next(err);
};

app.listen(PORT, () => {
    console.log(COLOR, `Server listening on PORT ${PORT}.`);
    createTerminus(server, OPTS_TERMINUS);
});

app.disable('x-powered-by');

app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'template',
}));

app.set('views', path.join(__dirname, '../documents/views'));
app.set('view engine', 'hbs');
app.set('trust proxy', 'loopback, linklocal, uniquelocal');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../')));
app.use(express.urlencoded({ extended: false }));

app.use(actuator());
app.use(compression());
app.use(cookieParser());
app.use(cors(OPTS_CORS));
app.use(helmet());
app.use(log);
app.use(session(OPTS_SESSION));

app.use('/api/users', router);

app.route('/api/route')
    .get([(req, res, next) => next('route')])
    .post((req, res) => res.send('POST!'))
    .put((req, res) => res.send('PUT!'))
    .patch((req, res) => res.send('PATCH!'))
    .delete((req, res) => res.send('DELETE!'))
    .all((req, res) => res.send(`${req.method}!`));

app.get('/api', (req, res) => {
    res.render('home', { heading: 'ROUTES', users });
});

app.get('/api/cookies', (req, res) => {
    res.json(req.cookies);
});

app.get('/api/error', () => {
    throw new Error('500');
});

app.get('/api/route', (req, res) => {
    res.send('GET!');
});

app.get('/api/photo', (req, res) => {
    res.sendFile(path.join(__dirname, '../assets/nina-nesbitt.jpg'));
});

app.get('/api/sql', select);

app.all(/(^\/api\/).*/, (req, res) => {
    res.redirect('/api');
});

app.all(/^(?!(^\/api\/?$)).*/, (req, res) => {
    res.redirect('/');
});

app.use(error);
