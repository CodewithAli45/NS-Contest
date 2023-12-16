const http = require('http');
const app = require('./config/app');


const port = process.env.PORT;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});