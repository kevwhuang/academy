require('fs').readFile('index.html', (err, html) => {
    if (err) { throw err; }

    const server = require('http').createServer((req, res) => {
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end();
    });

    server.listen(port = 10000, hostname = '127.0.0.1', () => {
        console.log(`Server port: ${port}`);
    });
});
