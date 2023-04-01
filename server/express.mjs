import 'dotenv/config';
import { fileURLToPath } from 'url';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import exphbs from 'express-handlebars';
import express from 'express';
import path from 'path';

import router from './router.mjs';
import select from './pool.mjs';
import users from './users.mjs';

const app = express();
const PORT = process.env.PORT || 5000;
const COLOR = '\x1b[35m%s\x1b[0m';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const log = (req, res, next) => {
    console.table({
        method: req.method,
        url: `${req.protocol}://${req.get('host')}${req.url}`,
        time: new Date().toUTCString(),
    });
    next();
};

app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'template',
}));
app.set('views', path.join(__dirname, '../documents/views'));
app.set('view engine', 'hbs');

app.listen(PORT, () => console.log(COLOR, `Server listening on PORT ${PORT}.`));

app.use(express.json());
app.use(express.static(path.join(__dirname, '../')));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(log);

app.use('/api/users', router);

app.get('/', (req, res) => res.redirect('/api'));
app.get('/api', (req, res) => res.render('home', { heading: 'ROUTES', users }));
app.get('/sql', select);
app.get('/photo', (req, res) => {
    res.sendFile(path.join(__dirname, '../assets/nina-nesbitt.jpg'));
});
