/*
 * @Author: mingxing.huang
 * @Date: 2020-05-14 14:19:48
 */
const http = require('http');
const server = http.createServer((req, res) => {
    console.log("request received");
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ok');
});

server.listen(8088);