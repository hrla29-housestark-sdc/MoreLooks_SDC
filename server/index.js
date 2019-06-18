require('newrelic')
const express = require('express');
const path = require('path');
// const morgan = require('morgan');
const parser = require('body-parser');
const router = require('./routes.js');

// const redisClient = requiire('redis').createClient;
// const redis = redisClient(6379, 'localhost');
// module.exports = redis;

const server = express();
const port = 3000;


// server.use(morgan('dev'))
server.use(parser.json())
server.use(parser.urlencoded({extended: true}))

server.use(express.static(path.join(__dirname, '../client/dist')))

server.use('/morelooks', router)
server.listen(port, () => console.log(`listening on port ${port}`))



