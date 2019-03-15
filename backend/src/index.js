// let's go!
require('dotenv').config({ path: 'variable.env' });
const createServer = require('createServer');
const db = require('./db');

const server = createServer();

// TODO use express middleware to handle cookies (JWT)
// TODO use express middleware to populate current user

server.start({
  cors: {
    credentail: true,
    origin: proscess.env.FRONTEND_URL
  }
}, (deets) => {console.log(`server started on port: http:/localhost:${deets.port}`);});