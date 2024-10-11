import http, { request } from 'http';

const server= http.createServer((request, response) => {
    if (request.method === 'POST') {
        request.addListener('data', function(data) {
            response.setHeader('Content-Type', 'application/json');
            response.write(data);
            response.end();
        })
    } else {
        response.write('Hello World');
        response.end();
    }
});