const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("hello world #####");
        res.end()
    }
    if (req.url === '/api/piyush') {
        // req.write(" piyush  is devloper ");
        res.write(JSON.stringify([1, 2, 3, 4, 5]));
        res.end();
    }
});

server.listen(7000);
console.log('page is running on 7000 ....');