

const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({
        "name": "Khubaib",
        "email": "khubaib@gmail.com",
    }));
    res.end();
}).listen(5000);

console.log('Server running at http://localhost:5000/');
