const http = require('http');

const routes = {
    '/contact:get': (request, response) => {
        response.write('Contact us page');

        return response.end();
    },
    default: (request, response) => {
        response.write('Hello world!');

        return response.end()
    }
}
const handler = function (request, response) {
    const { url, method } = request;
    const routeKey = `${url}:${method.toLowerCase()}`;
    const choosen = routes[routeKey] || routes.default;

    response.writeHead(200, { 'Content-Type': 'text/html' });

    return choosen(request, response);
}

const app = http.createServer(handler).listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

module.exports = app;