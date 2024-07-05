
import http from 'http';
import { InjectHttpInterceptor } from '../src/index.js';

InjectHttpInterceptor();

function handleRequest(request, response) {
    // response.setHeader('X-Instrumented-By', 'raveenita');
    response.end('Hello World!');
}

const server = http.createServer(handleRequest);
const port = 3000;

server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
