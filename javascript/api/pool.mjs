import mysql from 'mysql';

const dbOptions = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'admin',
    connectTimeout: 10000,
    debug: false,
};

const poolOptions = {
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 100,
    queueLimit: 0,
    acquireTimeout: 10000,
    waitForConnections: true,
    debug: false,
};

function select(req, res) {
    const template = 'SELECT * FROM ?? WHERE ?? > ?';
    const values = ['users', 'id', 0];
    const query = mysql.format(template, values);

    if (Number(process.env.STATE_POOL)) {
        const pool = mysql.createPool(poolOptions);

        pool.query(query, (err, results) => {
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

export default select;
