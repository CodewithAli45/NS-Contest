const http = require('http');
const app = require('./config/app');
const dbconnection = require('./config/db');
const port = process.env.PORT;


const server = http.createServer(app);
dbconnection();


server.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
})