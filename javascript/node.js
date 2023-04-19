const $START = require('perf_hooks').performance.now();
const LOG = true;
const MAIN = 'assert|fs|path|url|util';
const SUPPORT = 'crypto|http|https|os';
const modules = `${MAIN}|${SUPPORT}|cluster|dgram|dns|events|net|querystring|readline|string_decoder`;
const [PURPLE, TEAL] = ['\x1b[35m%s\x1b[0m', '\x1b[36m%s\x1b[0m'];
const [c, C, O] = [console.log, console.table, function (output) { this.output = output; }];
const $ = (table, key, value) => eval(`$${table}['${key}'] = new O('${value}')`);
const node = table => LOG && setTimeout(() => { c(TEAL, table); C(eval(`$${table}`)); }, 0);
const t = output => setTimeout(() => c(PURPLE, output), 10);

for (const e of modules.split('|')) { eval(`var ${e} = require('${e}'); var $${e} = {}`); }
c(PURPLE, '#'.repeat(29));

node('assert');
$('assert', 'deepStrictEqual()', '', assert.strict.deepStrictEqual([{ 0: [0] }], [{ 0: [0] }]));
$('assert', 'doesNotMatch()', '', assert.strict.doesNotMatch('1', /2/));
$('assert', 'ifError()', '', assert.strict.ifError(undefined));
$('assert', 'match()', '', assert.strict.match('1', /1/));
$('assert', 'notDeepStrictEqual()', '', assert.strict.notDeepStrictEqual([{ 0: [0] }], [{ 0: ['0'] }]));
$('assert', 'ok()', '', assert.strict.ok(!!1));
$('assert', 'throws()', '', assert.strict.throws(() => { throw Error; }));

node('cluster');
$('cluster', 'fork()', '', cluster.isMaster && cluster.fork());
$('cluster', 'kill()', '', cluster.isWorker && process.kill(process.pid));

node('crypto');
$('crypto', 'scryptSync()', `${crypto.scryptSync('password', 'salt', 64).toString('hex').slice(0, 20)}...`);

node('dgram');
$('dgram', 'createSocket()', dgram.createSocket('udp4').bind(9999, 'localhost').type);

node('dns');
$('dns', 'resolve()', '142.251.33.14' || dns.resolve('google.com', 'ANY', (err, res) => res[0].address));
$('dns', 'reverse()', 'dfw25s44-in-f14.1e100.net' || dns.reverse('142.251.33.14', (err, res) => res[0]));

node('events');
const emitter = new events();
emitter.on('event', c);
$('events', 'emit()', 'text' || emitter.emit('event', 'text'));
$('events', 'eventNames()', emitter.eventNames());
emitter.off('event', c);

node('fs');
const dirPath = path.join(__dirname, '../output');
const filePath = path.join(dirPath, '/node.txt');
$('fs', 'accessSync()', '', fs.accessSync(__filename, fs.constants.R_OK | fs.constants.W_OK));
$('fs', 'existsSync()', fs.existsSync(dirPath));
$('fs', 'mkdirSync()', '', !fs.existsSync(dirPath) && fs.mkdirSync(dirPath));
$('fs', 'readdirSync()', fs.readdirSync(__dirname).at(-1));
$('fs', 'statSync()', fs.statSync(__filename).size);
$('fs', '1:writeFileSync()', '', fs.writeFileSync(filePath, 'Hello, '));
$('fs', '2:appendFileSync()', '', fs.appendFileSync(filePath, 'World!'));
$('fs', '3:readFileSync()', fs.readFileSync(filePath, 'utf8'));
$('fs', '4:copyFileSync()', '', fs.copyFileSync(filePath, path.join(dirPath, '/copy.nfo')));
$('fs', '5:renameSync()', '', fs.renameSync(filePath, path.join(dirPath, '/node.nfo')));
$('fs', '6:rmSync()', '', fs.rmSync(dirPath, { recursive: true, maxRetries: 2 }));

node('http');
const opts = { cert: fs.readFileSync('./documents/cert.pem'), key: fs.readFileSync('./documents/private.pem') };
$('http', 'METHODS', http.METHODS.length);
$('http', 'STATUS_CODES', Object.keys(http.STATUS_CODES).length);
$('http', 'createServer()', http.createServer(server).listen(5000, 'localhost') && 'http://localhost:5000');
$('http', 'listen()', https.createServer(opts, server).listen(5001, 'localhost') && 'https://localhost:5001');

node('net');
const block = new net.BlockList();
$('net', 'addAddress()', block.addAddress('127.0.0.1') || block.rules[0].slice(9));
$('net', 'addRange()', block.addRange('10.0.0.0', '10.10.0.0') || block.rules[0].slice(7));
$('net', 'createServer()', net.createServer(Function).listen(9999)._connectionKey);

node('os');
$('os', 'cpus()', os.cpus()[0].model.slice(os.cpus()[0].model.indexOf(' i') + 1));
$('os', 'freemem()', `${parseInt(os.freemem() * 1e-6, 10)} MB`);
$('os', 'machine()', os.machine());
$('os', 'release()', os.release());
$('os', 'totalmem()', `${parseInt(os.totalmem() * 1e-6, 10)} MB`);
$('os', 'type()', os.type());
$('os', 'userInfo()', os.userInfo().username);

node('path');
$('path', 'basename()', path.basename(__filename) || path.parse(__filename).base);
$('path', 'dirname()', `.../${path.dirname(__filename).slice(28)}` || path.parse(__filename).dir);
$('path', 'extname()', path.extname(__filename) || path.parse(__filename).ext);
$('path', 'join()', `.../${path.posix.join(__dirname, '../file.ext').slice(28)}`);

node('querystring');
$('querystring', 'parse()', JSON.stringify(querystring.parse('q1=s1&q2=s2', '&', '=')));
$('querystring', 'stringify()', querystring.stringify(Object.fromEntries(new URLSearchParams('?q1=s1&q2=s2'))));

node('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
$('readline', 'createInterface()', '', rl.input);

node('string_decoder');
$('string_decoder', 'write()', (new string_decoder.StringDecoder).write(Buffer.from('æ')));

node('url');
const href = new URL('https://user:pass@sub.domain.com:8000/pa/th?q1=s1&q2=s2#hash');
$('url', 'hash', href.hash);
$('url', 'host', href.host);
$('url', 'hostname', href.hostname);
$('url', 'origin', href.origin);
$('url', 'password', href.password);
$('url', 'pathname', href.pathname);
$('url', 'port', href.port);
$('url', 'protocol', href.protocol);
$('url', 'search', new URLSearchParams(href.search));
$('url', 'username', href.username);

node('util');
$('util', 'format()', util.format('%%%s%d', 'A', 1));
$('util', 'inspect()', util.inspect(new WeakSet([[1]]), { depth: Infinity, showHidden: true }));
$('util', 'isPromise()', util.types.isPromise(Promise.resolve()));

t(`Execution time: ${(require('perf_hooks').performance.now() - $START).toFixed(3)} ms`);
t(`Process time: ${(process.uptime() * 1000).toFixed(3)} ms`);
setTimeout(() => rl.question(util.format(PURPLE, '#'.repeat(29), '\n'), Function), 200);

function server(req, res) {
    const reqPath = req.url === '/' ? '/index.html' : req.url;
    const resPath = path.join(__dirname, '../', reqPath);
    let contentType;
    switch (path.extname(resPath)) {
        case '.css': contentType = 'text/css'; break;
        case '.html': contentType = 'text/html'; break;
        case '.ico': contentType = 'image/ico'; break;
        case '.js': contentType = 'text/javascript'; break;
        case '.json': contentType = 'application/json'; break;
        default: contentType = 'text/plain';
    }
    fs.readFile(resPath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') res.writeHead(400);
            else res.writeHead(500);
            res.write('<h1>');
            res.end(`ERROR: ${err.code}</h1>`, 'utf8');
        } else {
            res.setHeader('Content-Type', contentType);
            res.writeHead(200);
            res.end(content, 'utf8');
            c(res.getHeaders()['content-type'].padEnd(15), reqPath);
        }
    });
}
