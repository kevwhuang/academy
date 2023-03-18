const c = console.log;
const C = console.table;

const path = require('path');
const pathRelative = '../output';
const pathOutputDir = path.join(__dirname, pathRelative);
const pathOutputFile = path.join(pathOutputDir, 'node.txt');
const pathCurrent = path.parse(__filename);
pathCurrent['dir'] = path.dirname(__filename);
pathCurrent['base'] = path.basename(__filename);
pathCurrent['ext'] = path.extname(__filename);

const fs = require('fs');
if (!fs.existsSync(pathOutputDir)) fs.mkdirSync(pathOutputDir);
fs.writeFileSync(pathOutputFile, '');
fs.appendFileSync(pathOutputFile, 'Hello, World!');
const fsData = fs.readFileSync(pathOutputFile, 'utf8');
fs.renameSync(pathOutputFile, path.join(pathOutputDir, 'node.nfo'));
fs.rmSync(pathOutputDir, { recursive: true });

const os = require('os');

const url = require('url');
const link = new URL('https://user:pass@sub.domain.com:8000/path?p1=v1&p2=v2#hash');
link.searchParams.append('p3', 'v3');

const EventEmitter = require('events');
class MyEmitter extends require('events') { log(msg) { this.emit('event', msg); } }
const emitter = new MyEmitter;
emitter.on('event', c);

const http = require('http');
const PORT = 10000;
const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, '../', req.url === '/' ? 'index.html' : req.url);
    let contentType;

    switch (path.extname(filePath)) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.ico':
            contentType = 'image/ico';
            break;
        default:
            contentType = 'text/html';
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') res.writeHead(400);
            else res.writeHead(500);
            res.write('<h1>');
            res.end(`ERROR: ${err.code}</h1>`, 'utf8');
        } else {
            res.setHeader('Content-Type', contentType);
            res.end(content);
        }
    });
});
server.listen(PORT, 'localhost');

c('\x1b[35m%s\x1b[0m', '=============================');

// c(global);
// c(process);
// c(console);

// c(path);
// c(pathCurrent);
// c(fs);
// c(fsData);
// c(os);
// c(os.cpus());
// C([`${os.platform()} ${os.arch()}`, `${os.freemem()} / ${os.totalmem()}`]);
// c(url);
// c(link);
// c(EventEmitter);
// emitter.log('test');
// c(http);
// c(server);
