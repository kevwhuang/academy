import mysql from 'mysql';

const dbOptions = {
    debug: false,
    connectTimeout: 10000,
    database: 'admin',
    host: 'localhost',
    password: 'password',
    user: 'root',
};

const poolOptions = {
    debug: false,
    waitForConnections: true,
    acquireTimeout: 10000,
    connectionLimit: 100,
    queueLimit: 0,
    database: process.env.DATABASE,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    user: process.env.USERNAME,
};

export default function select(req, res) {
    const template = 'SELECT * FROM ?? WHERE ?? > ?';
    const values = ['users', 'id', 0];
    const query = mysql.format(template, values);

    if (Number(process.env.STATE_POOL)) {
        const pool = mysql.createPool(poolOptions);

        pool.query(query, (err, results, fields) => {
            if (err) return res.status(500).json(err);
            pool.on('acquire', con => console.log('acquire'));
            pool.on('connection', con => console.log('connection'));
            pool.on('enqueue', con => console.log('enqueue'));
            pool.on('release', con => console.log('release'));
            res.send(results);
            pool.end();
        });
    } else {
        mysql.createConnection(dbOptions)
            .query(template, values, (err, results, fields) => {
                if (err) return res.status(500).json(err);
                res.send(results);
            });
    }
}
