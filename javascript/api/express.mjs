import 'dotenv/config';
import { fileURLToPath } from 'url';
import { users } from './users.mjs';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import exphbs from 'express-handlebars';
import express from 'express';
import path from 'path';
import route from './router.mjs';

const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'template',
}));
app.set('views', path.join(__dirname, '../../documents/views'));
app.set('view engine', 'hbs');
app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}.`));

app.use(express.json());
app.use(express.static(path.join(__dirname, '../')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(log);
app.use('/api/users', route);

app.get('/', (req, res) => res.redirect('/api'));
app.get('/api', (req, res) => res.render('home', { heading: 'ROUTES', users }));
app.get('/api/photo', (req, res) => {
    res.sendFile(path.join(__dirname, '../../assets/nina-nesbitt.jpg'));
});

function log(req, res, next) {
    console.table({
        time: new Date().toUTCString(),
        url: `${req.protocol}://${req.get('host')}${req.url}`,
        method: req.method,
    });
    next();
}
